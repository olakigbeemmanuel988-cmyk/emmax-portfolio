import EmmaxLogo from './EmmaxLogo.tsx';

const footerLinks = {
  Services: ['Digital Marketing', 'Website Development', 'E-commerce', 'Product Reviews'],
  Company: ['About', 'Portfolio', 'Blog', 'Testimonials'],
  Legal: ['Privacy Policy', 'Terms & Conditions'],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur px-6 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-5"><EmmaxLogo size="large" /></div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">Digital Marketing Specialist, Website Developer, and E-commerce Expert helping businesses grow online.</p>
            <a href="https://wa.me/2349049078503" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors cursor-pointer">Get Free Consultation</a>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">{links.map(link => (<li key={link}><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors cursor-pointer">{link}</a></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© {year} Emmax Digital. All rights reserved.</p>
          <p className="text-muted-foreground text-xs">Crafted with passion for digital excellence</p>
        </div>
      </div>
    </footer>
  );
}