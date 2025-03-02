interface PlausibleProps {
  domain: string;
  plausibleHost?: string;
}

const Plausible = ({ domain, plausibleHost }: PlausibleProps) => {
  return (
    <>
      <script
        defer
        data-domain={domain}
        src={`${plausibleHost}/js/script.js`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.plausible = window.plausible || function() {
              (window.plausible.q = window.plausible.q || []).push(arguments)
            }
          `,
        }}
      />
    </>
  );
};

export default Plausible;
