import { Laptop, Palette, Code2, Sparkles } from 'lucide-react';
import Badge from '../components/ui/Badge';
import IconBubble from '../components/ui/IconBubble';
import gccImage from '../assets/image/girl-can-code.jpg';

const gccItems = [
  {
    icon: Laptop,
    title: 'Informatique & bureautique',
    text: "Maîtriser les bases de l'ordinateur et les outils bureautiques du quotidien.",
  },
  {
    icon: Palette,
    title: 'Design graphique & UX/UI',
    text: 'Créer des visuels et concevoir des interfaces utiles et esthétiques.',
  },
  {
    icon: Code2,
    title: 'Code & programmation',
    text: 'Apprendre à coder pas à pas et donner vie à ses propres projets.',
  },
  {
    icon: Sparkles,
    title: 'Formation de 3 mois',
    text: "Un parcours complet dans un environnement d'apprentissage, de partage et de créativité.",
  },
];

export default function GirlsCanCode() {
  return (
    <section
      id="girls-can-code"
      className="border-t border-white/10 bg-[radial-gradient(circle_at_80%_0%,#231b1e_0%,#150f11_60%)] px-4 py-16 font-['Nunito',sans-serif] text-white sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Badge>Programme · Girls Can Code 2024</Badge>

            <h2 className="mb-4 font-['Baloo_2',sans-serif] text-[1.6rem] font-bold leading-tight sm:text-3xl">
              <span className="text-[#ff3d81]">Girls Can Code</span> : 3 mois
              pour construire ton avenir numérique
            </h2>

            <p className="mb-6 text-sm leading-7 text-[#b5adb0]">
              Girls Can Code (GCC) est le programme phare de l'Association
              Flamingo destiné aux jeunes filles de 15 à 25 ans. Pendant trois
              mois, les participantes découvrent le monde du numérique et
              développent de nouvelles compétences dans un environnement
              d'apprentissage, de partage et de créativité.
            </p>

            <ul className="space-y-4">
              {gccItems.map(({ icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <IconBubble icon={icon} className="h-8 w-8" />
                  <div>
                    <h3 className="text-[13px] font-bold">{title}</h3>
                    <p className="text-xs leading-relaxed text-[#a39b9e]">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image avec halo rose */}
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(255,61,129,0.3)]">
            <img
              src={gccImage}
              alt="Participantes du programme Girls Can Code 2024 autour d'un ordinateur"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}