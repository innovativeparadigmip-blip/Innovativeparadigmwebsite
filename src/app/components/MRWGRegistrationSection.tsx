import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { CheckCircle, Send, ArrowLeft, Upload } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface FormState {
  fullName: string;
  guardianName: string;
  dob: string;
  gender: string;
  cnic: string;
  mobile: string;
  whatsapp: string;
  email: string;
  qualification: string;
  specialization: string;
  institution: string;
  designation: string;
  membershipCategory: string;
  amountPaid: string;
  registrationFee: string;
  paymentMethod: string;
  paymentMethodOther: string;
  transactionId: string;
  paymentDate: string;
  paidBy: string;
  areasOfInterest: string[];
  areasOfInterestOther: string;
  howHeard: string;
  declarationAccepted: boolean;
  signature: string;
}

const emptyForm: FormState = {
  fullName: '',
  guardianName: '',
  dob: '',
  gender: '',
  cnic: '',
  mobile: '',
  whatsapp: '',
  email: '',
  qualification: '',
  specialization: '',
  institution: '',
  designation: '',
  membershipCategory: '',
  amountPaid: '',
  registrationFee: '',
  paymentMethod: '',
  paymentMethodOther: '',
  transactionId: '',
  paymentDate: '',
  paidBy: '',
  areasOfInterest: [],
  areasOfInterestOther: '',
  howHeard: '',
  declarationAccepted: false,
  signature: '',
};

const genderOptions = ['Male', 'Female', 'Other'];
const designationOptions = ['Student', 'Research Scholar', 'Faculty Member', 'Clinician', 'Healthcare Professional'];
const membershipOptions = ['Student Membership', 'Research Membership', 'Faculty Membership', 'Institutional Membership'];
const paymentMethodOptions = ['Bank Transfer', 'Online Banking', 'JazzCash', 'EasyPaisa', 'Debit/Credit Card', 'Other'];
const areasOfInterestOptions = [
  'Research Proposal Writing',
  'Thesis Writing',
  'Article Writing',
  'Systematic Review & Meta-analysis',
  'SPSS Data Analysis',
  'Workshops & Training',
  'Research Publication Assistance',
  'Other',
];
const howHeardOptions = ['Facebook', 'WhatsApp', 'University / Hospital', 'Friend / Colleague', 'Website', 'Other'];

const inputClass = 'bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#FF6A00]';

function Pill({
  label,
  checked,
  onClick,
  name,
  type = 'radio',
  required = false,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
  name: string;
  type?: 'radio' | 'checkbox';
  required?: boolean;
}) {
  return (
    <label
      className={`flex items-center justify-center gap-2 cursor-pointer rounded-lg border px-4 py-2.5 text-sm text-center transition-all duration-200 select-none ${
        checked
          ? 'bg-[#FF6A00] border-[#FF6A00] text-white font-medium'
          : 'bg-black/50 border-white/20 text-gray-300 hover:border-[#FF6A00]/50'
      }`}
    >
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onClick}
        required={required}
        className="sr-only"
      />
      {label}
    </label>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white pb-3 border-b border-white/10">{title}</h3>
      {children}
    </div>
  );
}

export function MRWGRegistrationSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [screenshotName, setScreenshotName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleInterest = (item: string) => {
    setForm((prev) => ({
      ...prev,
      areasOfInterest: prev.areasOfInterest.includes(item)
        ? prev.areasOfInterest.filter((i) => i !== item)
        : [...prev.areasOfInterest, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submission target not yet connected — logging the payload so it's ready to wire to a backend later.
    console.log('MRWG registration submission:', { ...form, paymentScreenshot: screenshotName || null });
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-black min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-full mb-6"
          >
            <CheckCircle className="text-white" size={40} />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">Registration Received</h2>
          <p className="text-gray-400 text-lg mb-8">
            Thank you, {form.fullName || 'applicant'}. Your Medical Research Writers Guild
            registration has been submitted. Our team will review your details and get back to you at{' '}
            <span className="text-white">{form.email}</span>.
          </p>
          <Link to="/mrwg">
            <button className="inline-flex items-center gap-2 text-[#FF6A00] hover:text-orange-400 transition-colors">
              <ArrowLeft size={18} />
              Back to Guild overview
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FF6A00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Healthcare Research Unit — Innovative Paradigm
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Membership Registration</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto"></div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 sm:p-10 space-y-12"
        >
          {/* Personal Information */}
          <FormSection title="Personal Information">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-white mb-2">Full Name *</Label>
                <Input id="fullName" required value={form.fullName} onChange={(e) => update('fullName', e.target.value)} className={inputClass} placeholder="Dr. Ayesha Khan" />
              </div>
              <div>
                <Label htmlFor="guardianName" className="text-white mb-2">Father's / Guardian's Name *</Label>
                <Input id="guardianName" required value={form.guardianName} onChange={(e) => update('guardianName', e.target.value)} className={inputClass} placeholder="Full name" />
              </div>
              <div>
                <Label htmlFor="dob" className="text-white mb-2">Date of Birth *</Label>
                <Input id="dob" type="date" required value={form.dob} onChange={(e) => update('dob', e.target.value)} className={inputClass} />
              </div>
              <div>
                <Label htmlFor="cnic" className="text-white mb-2">CNIC *</Label>
                <Input id="cnic" required value={form.cnic} onChange={(e) => update('cnic', e.target.value)} className={inputClass} placeholder="xxxxx-xxxxxxx-x" />
              </div>
              <div>
                <Label htmlFor="mobile" className="text-white mb-2">Mobile No. *</Label>
                <Input id="mobile" type="tel" required value={form.mobile} onChange={(e) => update('mobile', e.target.value)} className={inputClass} placeholder="03XX-XXXXXXX" />
              </div>
              <div>
                <Label htmlFor="whatsapp" className="text-white mb-2">WhatsApp No.</Label>
                <Input id="whatsapp" type="tel" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} className={inputClass} placeholder="03XX-XXXXXXX" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email" className="text-white mb-2">Email Address *</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <Label className="text-white mb-3 block">Gender *</Label>
              <div className="grid grid-cols-3 gap-3">
                {genderOptions.map((opt) => (
                  <Pill key={opt} label={opt} name="gender" required checked={form.gender === opt} onClick={() => update('gender', opt)} />
                ))}
              </div>
            </div>
          </FormSection>

          {/* Academic / Professional Information */}
          <FormSection title="Academic / Professional Information">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="qualification" className="text-white mb-2">Highest Qualification *</Label>
                <Input id="qualification" required value={form.qualification} onChange={(e) => update('qualification', e.target.value)} className={inputClass} placeholder="MBBS, MPH, PhD..." />
              </div>
              <div>
                <Label htmlFor="specialization" className="text-white mb-2">Field / Specialization *</Label>
                <Input id="specialization" required value={form.specialization} onChange={(e) => update('specialization', e.target.value)} className={inputClass} placeholder="Public Health, Cardiology..." />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="institution" className="text-white mb-2">Institution / Organization *</Label>
                <Input id="institution" required value={form.institution} onChange={(e) => update('institution', e.target.value)} className={inputClass} placeholder="University / Hospital name" />
              </div>
            </div>

            <div>
              <Label className="text-white mb-3 block">Designation *</Label>
              <div className="grid sm:grid-cols-3 gap-3">
                {designationOptions.map((opt) => (
                  <Pill key={opt} label={opt} name="designation" required checked={form.designation === opt} onClick={() => update('designation', opt)} />
                ))}
              </div>
            </div>
          </FormSection>

          {/* Membership Category */}
          <FormSection title="Membership Category">
            <div className="grid sm:grid-cols-2 gap-3">
              {membershipOptions.map((opt) => (
                <Pill key={opt} label={opt} name="membershipCategory" required checked={form.membershipCategory === opt} onClick={() => update('membershipCategory', opt)} />
              ))}
            </div>
          </FormSection>

          {/* Membership Fee & Payment */}
          <FormSection title="Membership Fee & Payment (optional at registration)">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="amountPaid" className="text-white mb-2">Amount Paid (PKR)</Label>
                <Input id="amountPaid" value={form.amountPaid} onChange={(e) => update('amountPaid', e.target.value)} className={inputClass} placeholder="Rs. 0" />
              </div>
              <div>
                <Label htmlFor="registrationFee" className="text-white mb-2">Registration Fee (if applicable)</Label>
                <Input id="registrationFee" value={form.registrationFee} onChange={(e) => update('registrationFee', e.target.value)} className={inputClass} placeholder="Rs. 0" />
              </div>
            </div>

            <div>
              <Label className="text-white mb-3 block">Payment Method</Label>
              <div className="grid sm:grid-cols-3 gap-3">
                {paymentMethodOptions.map((opt) => (
                  <Pill key={opt} label={opt} name="paymentMethod" checked={form.paymentMethod === opt} onClick={() => update('paymentMethod', opt)} />
                ))}
              </div>
              {form.paymentMethod === 'Other' && (
                <Input value={form.paymentMethodOther} onChange={(e) => update('paymentMethodOther', e.target.value)} className={`${inputClass} mt-3`} placeholder="Please specify" />
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="transactionId" className="text-white mb-2">Transaction ID / Reference No.</Label>
                <Input id="transactionId" value={form.transactionId} onChange={(e) => update('transactionId', e.target.value)} className={inputClass} />
              </div>
              <div>
                <Label htmlFor="paymentDate" className="text-white mb-2">Date of Payment</Label>
                <Input id="paymentDate" type="date" value={form.paymentDate} onChange={(e) => update('paymentDate', e.target.value)} className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="paidBy" className="text-white mb-2">Paid By (Account Name)</Label>
                <Input id="paidBy" value={form.paidBy} onChange={(e) => update('paidBy', e.target.value)} className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="screenshot" className="text-white mb-2">Payment Screenshot / Receipt</Label>
                <label
                  htmlFor="screenshot"
                  className="flex items-center gap-3 cursor-pointer rounded-md border border-dashed border-white/20 bg-black/50 px-4 py-3 text-sm text-gray-400 hover:border-[#FF6A00]/50 transition-colors"
                >
                  <Upload size={18} className="flex-shrink-0" />
                  {screenshotName || 'Click to attach an image or PDF'}
                </label>
                <input
                  id="screenshot"
                  type="file"
                  accept="image/*,.pdf"
                  className="sr-only"
                  onChange={(e) => setScreenshotName(e.target.files?.[0]?.name ?? '')}
                />
              </div>
            </div>
          </FormSection>

          {/* Areas of Interest */}
          <FormSection title="Areas of Interest">
            <div className="grid sm:grid-cols-2 gap-3">
              {areasOfInterestOptions.map((opt) => (
                <Pill key={opt} label={opt} type="checkbox" name="areasOfInterest" checked={form.areasOfInterest.includes(opt)} onClick={() => toggleInterest(opt)} />
              ))}
            </div>
            {form.areasOfInterest.includes('Other') && (
              <Input value={form.areasOfInterestOther} onChange={(e) => update('areasOfInterestOther', e.target.value)} className={inputClass} placeholder="Please specify" />
            )}
          </FormSection>

          {/* How Did You Hear About Us */}
          <FormSection title="How Did You Hear About Us?">
            <select
              value={form.howHeard}
              onChange={(e) => update('howHeard', e.target.value)}
              className={`${inputClass} w-full h-9 rounded-md border px-3 text-sm bg-black/50`}
            >
              <option value="" className="bg-black">Select an option</option>
              {howHeardOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-black">{opt}</option>
              ))}
            </select>
          </FormSection>

          {/* Declaration */}
          <FormSection title="Declaration">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.declarationAccepted}
                onChange={(e) => update('declarationAccepted', e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#FF6A00] flex-shrink-0"
              />
              <span className="text-gray-400 text-sm leading-relaxed">
                I certify that the information provided in this registration form is accurate and complete to
                the best of my knowledge. I agree to abide by the rules and regulations of Healthcare Research
                Unit – Innovative Paradigm. I also consent to receive updates regarding research activities,
                workshops, conferences, and academic opportunities through email, SMS, or WhatsApp. *
              </span>
            </label>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="signature" className="text-white mb-2">Applicant Signature (type full name) *</Label>
                <Input id="signature" required value={form.signature} onChange={(e) => update('signature', e.target.value)} className={inputClass} placeholder="Full name as signature" />
              </div>
              <div>
                <Label className="text-white mb-2">Date</Label>
                <Input value={new Date().toLocaleDateString()} disabled className={`${inputClass} opacity-70`} />
              </div>
            </div>
          </FormSection>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#FF8C00] hover:to-orange-700 text-white py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 group"
          >
            Submit Registration
            <Send className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
