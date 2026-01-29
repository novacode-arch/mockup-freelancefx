import React from 'react';
import './App.css';

const Features = () => (
  &lt;div className=&quot;grid&quot;&gt;
    &lt;div className=&quot;feature&quot;&gt;
      &lt;img src=&quot;https://via.placeholder.com/80?text=💱&quot; alt=&quot;Devises&quot; /&gt;
      &lt;h3&gt;100+ Devises&lt;/h3&gt;
      &lt;p&gt;Convertit auto EUR/USD/GBP + split Stripe/Wise.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div className=&quot;feature&quot;&gt;
      &lt;img src=&quot;https://via.placeholder.com/80?text=📊&quot; alt=&quot;Taxes&quot; /&gt;
      &lt;h3&gt;VAT/TVA Auto&lt;/h3&gt;
      &lt;p&gt;Calc EU-compliant, rapports annuels prêts.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div className=&quot;feature&quot;&gt;
      &lt;img src=&quot;https://via.placeholder.com/80?text=⚡&quot; alt=&quot;Rapide&quot; /&gt;
      &lt;h3&gt;30s par Facture&lt;/h3&gt;
      &lt;p&gt;Template réutilisables, signatures e-mail intégrées.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
);

const Pricing = () => (
  &lt;div className=&quot;tiers&quot;&gt;
    &lt;div className=&quot;tier&quot;&gt;
      &lt;h3&gt;Starter&lt;/h3&gt;
      &lt;div className=&quot;price&quot;&gt;Gratuit&lt;/div&gt;
      &lt;ul&gt;
        &lt;li&gt;5 factures/mois&lt;/li&gt;
        &lt;li&gt;Devises basiques&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div className=&quot;tier&quot;&gt;
      &lt;h3&gt;Pro&lt;/h3&gt;
      &lt;div className=&quot;price&quot;&gt;€9/m&lt;/div&gt;
      &lt;ul&gt;
        &lt;li&gt;Illimité&lt;/li&gt;
        &lt;li&gt;VAT auto + reports&lt;/li&gt;
        &lt;li&gt;Templates custom&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div className=&quot;tier&quot;&gt;
      &lt;h3&gt;Agency&lt;/h3&gt;
      &lt;div className=&quot;price&quot;&gt;€29/m&lt;/div&gt;
      &lt;ul&gt;
        &lt;li&gt;+ Team collab&lt;/li&gt;
        &lt;li&gt;API + Zapier&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
);

const Testimonials = () => (
  &lt;div className=&quot;quotes&quot;&gt;
    &lt;div className=&quot;quote&quot;&gt;&quot;Sauvé 10h/mois sur factures. Parfait EU !&quot; — Marie, Dev FR&lt;/div&gt;
    &lt;div className=&quot;quote&quot;&gt;&quot;Multi-devises magique, clients ravis.&quot; — Alex, Designer UK&lt;/div&gt;
    &lt;div className=&quot;quote&quot;&gt;&quot;MVP payant jour 1. Merci !&quot; — Tom, Consultant BE&lt;/div&gt;
  &lt;/div&gt;
);

function App() {
  return (
    &lt;&gt;
      &lt;section className=&quot;hero&quot;&gt;
        &lt;h1&gt;Facturez en 30s&lt;br /&gt;Multi-Devises + Taxes EU Auto&lt;/h1&gt;
        &lt;p&gt;Dites adieu aux spreadsheets et erreurs VAT. FreelanceFX génère factures pro, split payments, calcule taxes — tout en 1 clic.&lt;/p&gt;
        &lt;a href=&quot;#pricing&quot; className=&quot;cta&quot;&gt;Commencer Gratuit&lt;/a&gt;
      &lt;/section&gt;
      &lt;section className=&quot;features&quot;&gt;
        &lt;h2&gt;Pourquoi FreelanceFX ?&lt;/h2&gt;
        &lt;Features /&gt;
      &lt;/section&gt;
      &lt;section className=&quot;pricing&quot; id=&quot;pricing&quot;&gt;
        &lt;h2&gt;Tarifs Simples&lt;/h2&gt;
        &lt;Pricing /&gt;
      &lt;/section&gt;
      &lt;section className=&quot;testimonials&quot;&gt;
        &lt;h2&gt;Freelancers adorent&lt;/h2&gt;
        &lt;Testimonials /&gt;
      &lt;/section&gt;
      &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2026 FreelanceFX. React by Nova. &lt;a href=&quot;https://github.com/novacode-arch/mockup-freelancefx&quot; style={{color: '#ccc', textDecoration: 'none'}}&gt;Source&lt;/a&gt;&lt;/p&gt;
      &lt;/footer&gt;
    &lt;/&gt;
  );
}

export default App;