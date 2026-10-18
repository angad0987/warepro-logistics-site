import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout, LegalSection, LegalContactCard } from "@/components/LegalPageLayout";
import { BRAND } from "@/lib/brand";

const LAST_UPDATED = "August 26, 2026";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CoreWarehousing" },
      {
        name: "description",
        content:
          "CoreWarehousing Privacy Policy — learn how we collect, use, and protect your personal information on our website.",
      },
      { property: "og:title", content: "Privacy Policy | CoreWarehousing" },
      {
        property: "og:description",
        content:
          "Learn how CoreWarehousing collects, uses, and protects your personal information.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection id="information-we-collect" number="01" title="Information We Collect">
        <p>
          We collect only the information that is reasonably necessary to respond to your requests,
          provide our services, process career applications, and operate our website.
        </p>
        <div className="grid gap-4 mt-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="text-sm font-semibold text-navy mb-2">Enquiries & Quote Requests</h3>
            <p className="text-sm">
              When you submit an enquiry or request a quote, we may collect your name, company or
              business name, phone number, email address, city or location, and details you provide
              about your warehousing or logistics requirements.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="text-sm font-semibold text-navy mb-2">Career Applications</h3>
            <p className="text-sm">
              When you submit a career application, we may collect your name, email address, phone
              number, location, LinkedIn profile URL if provided, years of experience, professional
              experience, and information contained in your resume or CV.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="text-sm font-semibold text-navy mb-2">Location Search</h3>
            <p className="text-sm">
              When you use location search functionality, your search query, such as a city or
              location name, may be processed by a third-party location service to provide relevant
              location suggestions or search results.
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>
            We do not intentionally collect payment card information through the forms described in
            this Privacy Policy.
          </p>
          <p>
            We also do not intentionally collect personal information from children through our
            website forms.
          </p>
        </div>
      </LegalSection>

      <LegalSection
        id="how-we-use-your-information"
        number="02"
        title="How We Use Your Information"
      >
        <p>We may use your personal information to:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Respond to your enquiries and requests",
            "Prepare and communicate information about our warehousing, fulfillment, transportation, or logistics services",
            "Communicate with you regarding your enquiry or business requirements",
            "Process and evaluate career applications",
            "Contact candidates regarding their applications or relevant employment opportunities",
            "Maintain records of our communications and submitted requests",
            "Protect our website and forms against spam, abuse, fraudulent activity, and automated submissions",
            "Operate, maintain, troubleshoot, and improve our website and related processes",
            "Comply with applicable legal or regulatory requirements",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-2 text-sm">
          <p>We do not sell your personal information.</p>
          <p>
            We do not use the information submitted through our website forms for unrelated
            advertising or marketing purposes without an appropriate basis or, where required, your
            permission.
          </p>
        </div>
      </LegalSection>

      <LegalSection
        id="how-we-process-and-store"
        number="03"
        title="How We Process and Store Your Information"
      >
        <p>
          Information submitted through our website may be processed using services that support our
          website operations and business processes.
        </p>
        <div className="grid gap-4 mt-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="text-sm font-semibold text-navy mb-2">Cloudflare Turnstile</h3>
            <p className="text-sm">
              We use Cloudflare Turnstile to help protect our forms against spam, automated
              submissions, and abuse. Information necessary for security and verification may be
              processed by Cloudflare as part of this service.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="text-sm font-semibold text-navy mb-2">Geapify</h3>
            <p className="text-sm">
              We use Geapify to provide city and location search functionality. Search queries may
              be processed by the service to return relevant location suggestions.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="text-sm font-semibold text-navy mb-2">Google Services</h3>
            <p className="text-sm">
              We may use Google services to process and store information submitted through our
              website, including Google Apps Script for processing form submissions, Google Sheets
              for maintaining submitted records, Google Drive for storing career resumes or CVs, and
              authorised business communication or operational notifications.
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <p>
            We may use trusted third-party service providers to operate, secure, or support our
            website and business processes. These providers may process personal information only as
            necessary to provide their services to us and subject to their own applicable privacy
            practices and legal or contractual obligations.
          </p>
          <p>
            We may also disclose information where reasonably necessary to comply with applicable
            law, legal processes, or lawful government requests, or to protect the rights, safety,
            security, or property of CoreWarehousing, our users, or others.
          </p>
        </div>
      </LegalSection>

      <LegalSection
        id="data-storage-security"
        number="04"
        title="Data Storage, Security & Retention"
      >
        <p>
          We take reasonable technical and organisational measures designed to protect personal
          information against unauthorised access, loss, misuse, alteration, or disclosure.
        </p>
        <p className="mt-3">
          Our security measures may include access controls, restricted access to business records,
          secure service providers, and technical measures appropriate to the nature of the
          information we process.
        </p>
        <p className="mt-3">
          However, no method of transmitting or storing information electronically can be guaranteed
          to be completely secure. While we take reasonable steps to protect your information, we
          cannot guarantee absolute security.
        </p>

        <h3 className="mt-6 font-semibold text-navy">Data Retention</h3>
        <p className="mt-3">
          We retain personal information only for as long as reasonably necessary for the purposes
          described in this Privacy Policy, including responding to and managing business enquiries,
          maintaining relevant business and communication records, processing and evaluating career
          applications, meeting applicable legal, accounting, regulatory, or security requirements,
          and resolving disputes or enforcing our legal rights where necessary.
        </p>
        <p className="mt-3">
          Career application information and resumes may be retained for the duration of the
          relevant recruitment process and for a reasonable period afterwards where necessary for
          legitimate recruitment, record-keeping, or legal purposes.
        </p>
        <p className="mt-3">
          When information is no longer reasonably required, we will take reasonable steps to
          delete, anonymise, or securely dispose of it, subject to applicable legal or operational
          requirements.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" number="05" title="Your Rights and Choices">
        <p>Depending on applicable law, you may have rights regarding your personal information.</p>
        <p className="mt-3">You may contact us to:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "Request information about the personal information we hold about you",
            "Request correction of inaccurate or incomplete information",
            "Request deletion of personal information, where applicable",
            "Withdraw consent where our processing is based on your consent",
            "Raise a concern about how your personal information has been handled",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-2 text-sm">
          <p>
            To exercise a request or raise a privacy concern, please contact us using the details
            provided below.
          </p>
          <p>We may need to verify your identity before responding to certain requests.</p>
          <p>
            Please note that some information may need to be retained where required or permitted by
            applicable law, for security purposes, or to maintain necessary business records.
          </p>
        </div>
      </LegalSection>

      <LegalSection id="contact" number="06" title="Contact Us & Policy Updates">
        <p>
          If you have questions, concerns, or requests relating to this Privacy Policy or your
          personal information, please contact us.
        </p>
        <LegalContactCard email={BRAND.email} phone={BRAND.phone} address={BRAND.address} />
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our website,
            services, data practices, or applicable legal requirements.
          </p>
          <p>
            When we make changes, we will update the "Last Updated" date at the top of this page. We
            encourage you to review this Privacy Policy periodically.
          </p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
