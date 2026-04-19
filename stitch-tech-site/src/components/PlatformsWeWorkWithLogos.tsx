import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { SimpleIcon } from 'simple-icons';
import { siGoogleanalytics, siGoogleads, siMeta, siSap } from 'simple-icons';

const DEVICON_ICONS = path.join(process.cwd(), 'node_modules', 'devicon', 'icons');

function readDevicon(relativePath: string): string {
  return readFileSync(path.join(DEVICON_ICONS, relativePath), 'utf8');
}

/**
 * AWS/Azure: not in Simple Icons anymore. Devicon (MIT) — single-path Azure mark;
 * original wordmark for AWS (two paths) reads clearly at larger sizes.
 */
const deviconAzureSvg = readDevicon(path.join('azure', 'azure-plain.svg'));
const deviconAwsSvg = readDevicon(
  path.join('amazonwebservices', 'amazonwebservices-original-wordmark.svg'),
);

type LogoRowItem =
  | { label: string; simpleIcon: SimpleIcon }
  | { label: string; deviconSvg: string };

const logoRowItems: LogoRowItem[] = [
  { label: 'SAP', simpleIcon: siSap },
  { label: 'Google Ads', simpleIcon: siGoogleads },
  { label: 'Google Analytics 4', simpleIcon: siGoogleanalytics },
  { label: 'Microsoft Azure', deviconSvg: deviconAzureSvg },
  { label: 'AWS', deviconSvg: deviconAwsSvg },
  { label: 'Meta Ads', simpleIcon: siMeta },
];

/** Remove inline fills so Tailwind `fill-current` + `text-primary` control color. */
function stripSvgFills(svg: string): string {
  return svg.replace(/\sfill="[^"]*"/gi, '');
}

function deviconSvgForRow(svg: string, label: string): string {
  const safe = label.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const stripped = stripSvgFills(svg);
  return stripped.replace(/^<svg\s+/i, `<svg role="img" aria-label="${safe}" `);
}

function SimpleIconLogo({ icon, label }: { icon: SimpleIcon; label: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
      className="h-12 w-12 shrink-0 text-primary sm:h-14 sm:w-14 md:h-16 md:w-16"
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

const deviconSpanClass =
  'inline-flex items-center text-primary [&_svg]:block [&_svg]:h-11 [&_svg]:w-auto [&_svg]:max-w-[10rem] sm:[&_svg]:h-14 sm:[&_svg]:max-w-[13rem] md:[&_svg]:h-16 md:[&_svg]:max-w-[15rem] [&_path]:fill-current';

export default function PlatformsWeWorkWithLogos() {
  return (
    <div className="contents">
      {logoRowItems.map((item) => (
        <div
          key={item.label}
          className="flex min-h-[4rem] items-center justify-center px-2 sm:min-h-[4.5rem] sm:px-4"
        >
          {'simpleIcon' in item ? (
            <SimpleIconLogo icon={item.simpleIcon} label={item.label} />
          ) : (
            <span
              className={deviconSpanClass}
              dangerouslySetInnerHTML={{ __html: deviconSvgForRow(item.deviconSvg, item.label) }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
