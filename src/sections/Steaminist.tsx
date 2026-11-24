import {
  FlaskConical,
  Telescope,
  Code2,
  Cpu,
  Calculator,
  Palette,
} from 'lucide-react';
import Badge from '../components/ui/Badge';
import IconBubble from '../components/ui/IconBubble';

const steamCards = [
  {
    icon: FlaskConical,
    title: 'Sciences & chimie',
    text: 'Manipulation du microscope et expériences chimiques encadrées avec du matériel de laboratoire.',
  },
  {
    icon: Telescope,
    title: 'Astronomie',
    text: "Séances d'observation ouvertes au grand public, en partenariat avec l'association Haikintana.",
  },
  {
    icon: Code2,
    title: 'Tech & codage',
    text: "Ateliers d'apprentissage et d'initiation au codage pour les collégiens et lycéens.",
  },
  {
    icon: Cpu,
    title: 'Ingénierie & robotique',
    text: 'Découverte de la robotique et programmation en langage C.',
  },
  {
    icon: Calculator,
    title: 'Mathématiques',
    text: "Un concours de mathématiques pour stimuler la logique et l'esprit de compétition.",
  },
  {
    icon: Palette,
    title: 'Arts',
    text: 'Exposition d\u2019œuvres et concours de dessin pour célébrer la créativité des participants.',
  },
];

export default function Steaminist() {
  return (
    <section
      id="steaminist"
      className="bg-[radial-gradient(circle_at_80%_0%,#231b1e_0%,#150f11_60%)] px-4 py-16 font-['Nunito',sans-serif] text-white sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <Badge>Projet réalisé · Décembre 2023</Badge>

        <h2 className="mb-4 font-['Baloo_2',sans-serif] text-[1.6rem] font-bold leading-tight sm:text-3xl">
          <span className="text-[#ff3d81]">Steaminist</span> : la science et
          l'art à portée des jeunes
        </h2>

        <p className="mb-8 max-w-[850px] text-sm leading-7 text-[#b5adb0]">
          Porté par l'Association Flamingo en décembre 2023, Steaminist a réuni
          des élèves de collège et de lycée autour d'un parcours découverte
          mêlant sciences, technologie, ingénierie, mathématiques et arts — pour
          éveiller les vocations et montrer que chaque discipline est
          accessible à toutes et à tous.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steamCards.map(({ icon, title, text }) => (
            <article
              key={title}
              className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
            >
              <div className="mb-4">
                <IconBubble icon={icon} className="h-9 w-9" />
              </div>
              <h3 className="mb-2 font-['Baloo_2',sans-serif] text-[15px] font-semibold">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-[#a39b9e]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}