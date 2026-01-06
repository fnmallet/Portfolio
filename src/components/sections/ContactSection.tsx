import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';
import { IconEmail, IconLinkedIn, IconWhatsApp } from '@/components/icons/IconSVGs';
import { URL } from '@/config/url';

const ContactSection = () => {
  return <Section className='mb-24 gap-8'>
    <p className='tracking-widest text-sm text-white/80'>¿Querés que trabajemos juntos?</p>
    <SectionTitle>Contactame</SectionTitle>
    <div className='flex gap-16 fill-white justify-center w-full'>
      <a href={URL.email} aria-label='Email' title='Email'>
        <IconEmail className='w-16 h-16 fill-white transition-transform hover:scale-105' />
      </a>
      <a href={URL.linkedIn} aria-label='LinkedIn' target='_blank' rel="noopener noreferrer" title='LinkedIn'>
        <IconLinkedIn className='w-16 h-16 fill-white transition-transform hover:scale-105' />
      </a>
      <a href={URL.whatsApp} aria-label='WhatsApp' target='_blank' rel="noopener noreferrer" title='WhatsApp'>
        <IconWhatsApp className='w-16 h-16 fill-white transition-transform hover:scale-105' />
      </a>
    </div>
  </Section>;
};

export default ContactSection;