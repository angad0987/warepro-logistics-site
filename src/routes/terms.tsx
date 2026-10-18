import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout, LegalSection, LegalContactCard } from "@/components/LegalPageLayout";
import { BRAND } from "@/lib/brand";

const LAST_UPDATED = "August 26, 2026";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | CoreWarehousing" },
      {
        name: "description",
        content:
          "CoreWarehousing Terms of Use — terms governing your use of our website and services.",
      },
      { property: "og:title", content: "Terms of Use | CoreWarehousing" },
      {
        property: "og:description",
        content: "Terms governing your use of the CoreWarehousing website and services.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalPageLayout title="Terms of Use" lastUpdated={LAST_UPDATED}>
      <LegalSection id="acceptance" number="01" title="Acceptance & Website Use">
        <p>
          By accessing or using the CoreWarehousing website, you agree to be bound by these Terms of
          Use. If you do not agree to these Terms, you must not use or access our website.
        </p>
        <p>
          You may use our website only for lawful purposes. You must not attempt to gain
          unauthorised access to the website or its systems, interfere with or disrupt its
          operation, bypass security measures, submit false, fraudulent, or misleading information,
          use automated tools or bots to abuse our forms or services, or engage in any activity that
          may harm CoreWarehousing, its website, or other users.
        </p>
      </LegalSection>

      <LegalSection id="website-information" number="02" title="Website Information & Services">
        <p>
          Information provided on this website is for general informational purposes and does not
          constitute a binding offer to provide services.
        </p>
        <p>
          Submitting an enquiry or quote request through this website does not create a binding
          contract between you and CoreWarehousing.
        </p>
        <p>
          Any quotation, proposal, scope of work, pricing, service availability, or business
          arrangement discussed following your enquiry may be subject to separate written terms and
          agreements between CoreWarehousing and the relevant client.
        </p>
      </LegalSection>

      <LegalSection id="user-submitted-information" number="03" title="User-Submitted Information">
        <p>
          When you submit information through our forms, including enquiry, quote request, or career
          application forms, you confirm that the information is accurate and that you have the
          right and necessary authority to provide it to us.
        </p>
        <p>
          You must not submit any information or material that is unlawful, fraudulent, defamatory,
          malicious, infringes the rights of another person, contains malware, or is otherwise
          intended to disrupt or compromise our website or services.
        </p>
        <p>
          Where you submit information relating to another person, you are responsible for ensuring
          that you are authorised to provide that information.
        </p>
        <p>
          Submission of a career application does not create an employment relationship, guarantee
          consideration for a position, guarantee an interview, or guarantee an offer of employment.
        </p>
        <p>
          For details on how we handle your information, please see our{" "}
          <Link
            to="/privacy-policy"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection
        id="intellectual-property"
        number="04"
        title="Intellectual Property & Third-Party Links"
      >
        <p>
          Unless otherwise stated, the content, branding, logos, text, graphics, and other materials
          on this website are owned by CoreWarehousing or used with appropriate permission or
          licence, and are protected by applicable intellectual property laws.
        </p>
        <p>
          You may view and use the website for personal or legitimate business purposes. You may not
          copy, reproduce, modify, distribute, publicly display, or otherwise use substantial
          portions of our website content without prior written permission, except where permitted
          by applicable law.
        </p>
        <p>
          Links to third-party websites are provided for convenience only. CoreWarehousing does not
          control, endorse, or assume responsibility for the content, availability, security, or
          privacy practices of third-party websites.
        </p>
      </LegalSection>

      <LegalSection
        id="availability-liability"
        number="05"
        title="Website Availability & Liability"
      >
        <p>
          We aim to keep our website available and functioning properly, but we do not guarantee
          that access will be uninterrupted, timely, secure, or error-free. We may modify, suspend,
          restrict, or discontinue all or part of the website at any time.
        </p>
        <p>
          To the maximum extent permitted by applicable law, CoreWarehousing will not be liable for
          any indirect, incidental, special, consequential, or punitive damages arising from or
          relating to the use of, or inability to use, this website.
        </p>
        <p>
          Nothing in these Terms is intended to exclude or limit any liability that cannot lawfully
          be excluded or limited under applicable law.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" number="06" title="Governing Law & Jurisdiction">
        <p>
          These Terms of Use are governed by and construed in accordance with the laws of India,
          without regard to its conflict of law principles.
        </p>
        <p>
          Subject to applicable law, any disputes relating to these Terms or your use of the website
          will be subject to the exclusive jurisdiction of the competent courts located in Mumbai,
          Maharashtra, India.
        </p>
      </LegalSection>

      <LegalSection id="changes-contact" number="07" title="Changes, Contact & General Terms">
        <p>
          We may update these Terms from time to time. Changes take effect when posted on this page.
          Your continued use of the website after any changes means you accept the updated Terms.
        </p>
        <p>
          If any provision of these Terms is found to be unenforceable, that provision will be
          limited or eliminated to the minimum extent necessary, and the remaining provisions will
          remain in full force and effect.
        </p>
        <p>If you have questions about these Terms, please contact us:</p>
        <LegalContactCard email={BRAND.email} phone={BRAND.phone} address={BRAND.address} />
      </LegalSection>
    </LegalPageLayout>
  );
}
