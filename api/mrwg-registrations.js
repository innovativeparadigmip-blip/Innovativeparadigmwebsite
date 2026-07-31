import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

const REQUIRED_FIELDS = [
  'fullName', 'guardianName', 'dob', 'gender', 'cnic', 'mobile', 'email',
  'qualification', 'specialization', 'institution', 'designation',
  'membershipCategory', 'declarationAccepted', 'signature',
];

export default async function handler(req, res) {
  if (req.method === 'POST') return handleCreate(req, res);
  if (req.method === 'GET') return handleList(req, res);
  return res.status(405).json({ error: 'Method not allowed' });
}

async function handleCreate(req, res) {
  const body = req.body;

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  try {
    const rows = await sql`
      INSERT INTO mrwg_registrations (
        full_name, guardian_name, dob, gender, cnic, mobile, whatsapp, email,
        qualification, specialization, institution, designation, membership_category,
        amount_paid, registration_fee, payment_method, payment_method_other,
        transaction_id, payment_date, paid_by, payment_screenshot_url,
        areas_of_interest, areas_of_interest_other, how_heard, declaration_accepted, signature
      ) VALUES (
        ${body.fullName}, ${body.guardianName}, ${body.dob}, ${body.gender}, ${body.cnic},
        ${body.mobile}, ${body.whatsapp || ''}, ${body.email}, ${body.qualification},
        ${body.specialization}, ${body.institution}, ${body.designation}, ${body.membershipCategory},
        ${body.amountPaid || ''}, ${body.registrationFee || ''}, ${body.paymentMethod || ''},
        ${body.paymentMethodOther || ''}, ${body.transactionId || ''}, ${body.paymentDate || null},
        ${body.paidBy || ''}, ${body.paymentScreenshotUrl || null},
        ${JSON.stringify(body.areasOfInterest || [])}, ${body.areasOfInterestOther || ''},
        ${body.howHeard || ''}, ${!!body.declarationAccepted}, ${body.signature}
      )
      RETURNING id, submitted_at
    `;
    return res.status(200).json({ success: true, id: rows[0].id });
  } catch (error) {
    console.error('mrwg-registrations create failed:', error);
    return res.status(500).json({ error: 'Failed to save registration' });
  }
}

async function handleList(req, res) {
  if (req.query.key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const rows = await sql`SELECT * FROM mrwg_registrations ORDER BY submitted_at DESC`;
  return res.status(200).json(rows);
}
