import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a
              href="tel:03004115550"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              0300 4115550
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:info@kleenora.pk"
              className="text-muted-foreground hover:text-secondary transition-colors"
            >
              info@kleenora.pk
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">
              Pakistan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
