
import Image from "next/image";

const skills = [
  {
    category: "Front-end",
    items: [
      "React", "Next.js", "TypeScript", "JavaScript",
      "HTML", "CSS", "Tailwind CSS",
    ],
  },
  {
    category: "Back-end",
    items: [
      "PHP", "Drupal", "Notions de Symfony", "Notions de Go",
    ],
  },
  {
    category: "Outils & méthodes",
    items: [
      "Git", "GitLab", "Azure DevOps", "Docker", "Scrum",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "SSO — Authentification",
    description:
      "Contribution aux parcours de connexion et d'inscription des utilisateurs pour différentes marques du Groupe Rossel.",
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    number: "02",
    title: "GPG — Gestion du profil",
    description:
      "Développement et maintenance de fonctionnalités liées à la gestion des comptes et des informations utilisateurs.",
    tags: ["Front-end", "API", "B2C"],
  },
  {
    number: "03",
    title: "PCG — Parcours clients",
    description:
      "Contribution aux parcours numériques d'abonnement, à la correction d'anomalies et aux évolutions fonctionnelles.",
    tags: ["Drupal", "PHP", "B2C"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1120] text-slate-100">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 lg:px-6">
          <a href="#home" className="shrink-0 text-xl font-bold">
            Enzo<span className="text-cyan-400">.</span>
          </a>

          <div className="flex items-center gap-4 text-xs text-slate-300 sm:gap-7 sm:text-sm">
            <a
              href="#about"
              className="hidden transition hover:text-cyan-400 sm:block"
            >
              À propos
            </a>
            <a
              href="#skills"
              className="hidden transition hover:text-cyan-400 md:block"
            >
              Compétences
            </a>
            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="rounded-md border border-cyan-400 px-3 py-2 text-cyan-400 transition hover:bg-cyan-400/10"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* ACCUEIL */}
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl scroll-mt-20 items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-6 lg:py-20"
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* PHOTO */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-44 sm:w-56 lg:w-full lg:max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-cyan-400/15 blur-2xl" />

              <Image
                src="/photo-enzo.png"
                alt="Enzo De Sousa"
                width={420}
                height={420}
                priority
                className="relative aspect-square w-full rounded-2xl border border-white/10 object-cover object-center shadow-2xl"
              />
            </div>
          </div>

          {/* PRÉSENTATION */}
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
            <p className="mb-4 text-sm font-medium text-cyan-400 sm:text-base">
              Disponible pour de nouvelles opportunités
            </p>

            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Enzo De Sousa
              <span className="text-cyan-400">.</span>
            </h1>

            <h2 className="mb-6 text-xl font-semibold text-slate-300 sm:text-2xl lg:text-3xl">
              Développeur Web Front-end
            </h2>

            <p className="mx-auto max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:mx-0">
              Diplômé Bac+5 en informatique, je dispose de plus
              de deux ans et demi d&apos;expérience en développement
              web B2C. Spécialisé en React, Next.js et TypeScript,
              je suis ouvert à une évolution vers le full-stack.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Découvrir mes projets
              </a>

              <a
                href="/cv-enzo-de-sousa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-600 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Consulter mon CV
              </a>
            </div>

            <div className="mt-7 flex justify-center gap-6 text-sm text-slate-400 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/enzo-de-sousa-21a020255/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:desousaenzo0718@gmail.com"
                className="transition hover:text-cyan-400"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section
        id="about"
        className="scroll-mt-20 bg-[#111a2e] py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold sm:mb-10 sm:text-4xl">
            <span className="text-cyan-400">01.</span> À propos
          </h2>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              <p>
                Je suis développeur web front-end diplômé
                d&apos;un Bac+5 en informatique à l&apos;EPSI Lille.
              </p>
              <p>
                J&apos;ai travaillé en alternance au sein du Groupe Rossel /
                La Voix du Nord, dans une équipe de développement B2C.
              </p>
              <p>
                J&apos;ai participé à la conception et à la maintenance
                de parcours numériques : authentification,
                gestion de profil et abonnements.
              </p>
              <p>
                Habitué au travail en équipe Agile Scrum,
                j&apos;accorde de l&apos;importance à la qualité du code,
                à l&apos;autonomie et à l&apos;amélioration continue.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0b1120] p-6 sm:p-8">
              <p className="mb-2 text-3xl font-bold text-cyan-400 sm:text-4xl">
                Bac+5
              </p>
              <p className="mb-7 text-sm text-slate-400 sm:text-base">
                Expert en Informatique et Systèmes
                d&apos;Information — EPSI Lille
              </p>

              <p className="mb-2 text-3xl font-bold text-cyan-400 sm:text-4xl">
                2 ans et 10 mois
              </p>
              <p className="mb-7 text-sm text-slate-400 sm:text-base">
                D&apos;alternance chez Groupe Rossel / La Voix du Nord
              </p>

              <p className="mb-2 text-3xl font-bold text-cyan-400 sm:text-4xl">
                B2C
              </p>
              <p className="text-sm text-slate-400 sm:text-base">
                Expérience sur des plateformes numériques
                utilisées par les clients du groupe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section
        id="skills"
        className="scroll-mt-20 py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold sm:mb-10 sm:text-4xl">
            <span className="text-cyan-400">02.</span> Compétences
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="rounded-xl border border-white/10 bg-[#111a2e] p-5 transition hover:border-cyan-400/50 sm:p-7"
              >
                <h3 className="mb-5 text-lg font-semibold sm:text-xl">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-cyan-400/10 px-3 py-2 text-xs text-cyan-300 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPÉRIENCE */}
      <section
        id="experience"
        className="scroll-mt-20 bg-[#111a2e] py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold sm:mb-10 sm:text-4xl">
            <span className="text-cyan-400">03.</span> Expérience
          </h2>

          <div className="border-l-2 border-cyan-400 pl-5 sm:pl-7">
            <p className="mb-2 text-sm font-medium text-cyan-400">
              Décembre 2023 — Septembre 2026
            </p>

            <h3 className="mb-2 text-xl font-bold sm:text-2xl">
              Développeur Web Front-end
            </h3>

            <p className="mb-6 text-base text-slate-300 sm:text-lg">
              Groupe Rossel / La Voix du Nord
            </p>

            <div className="max-w-3xl space-y-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              <p>
                Développement et maintenance des parcours
                numériques B2C : inscription, authentification,
                gestion du profil et abonnements.
              </p>
              <p>
                Contribution aux projets SSO, GPG et PCG
                pour les différentes marques du groupe.
              </p>
              <p>
                Développement de nouvelles fonctionnalités,
                intégration d&apos;API et correction d&apos;anomalies.
              </p>
              <p>
                Réalisation de tests, participation aux déploiements
                et aux mises en production.
              </p>
              <p>
                Travail en équipe Agile Scrum :
                daily, sprint planning, estimations et rétrospectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section
        id="projects"
        className="scroll-mt-20 py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-6">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
            <span className="text-cyan-400">04.</span> Projets
          </h2>

          <p className="mb-8 text-sm text-slate-400 sm:mb-10 sm:text-base">
            Quelques projets professionnels auxquels j&apos;ai contribué.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="flex flex-col rounded-xl border border-white/10 bg-[#111a2e] p-5 transition hover:border-cyan-400/50 sm:p-7 lg:hover:-translate-y-1"
              >
                <p className="mb-6 text-sm font-bold text-cyan-400 sm:mb-8">
                  {project.number} / PROJET
                </p>

                <h3 className="mb-4 text-lg font-bold sm:text-xl">
                  {project.title}
                </h3>

                <p className="mb-7 flex-1 text-sm leading-7 text-slate-400 sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500 sm:text-sm">
            Projets réalisés dans un contexte professionnel ;
            les dépôts sources ne sont pas publics.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#111a2e] px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-sm text-cyan-400 sm:text-base">
            05. Et maintenant ?
          </p>

          <h2 className="mb-6 text-3xl font-bold sm:text-5xl">
            Travaillons ensemble.
          </h2>

          <p className="mb-8 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Je suis à la recherche de nouvelles opportunités
            en développement web front-end, avec une ouverture
            vers le full-stack.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:desousaenzo0718@gmail.com"
              className="rounded-lg bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Me contacter
            </a>

            <a
              href="https://www.linkedin.com/in/enzo-de-sousa-21a020255/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-600 px-8 py-4 text-center font-semibold transition hover:border-cyan-400"
            >
              Mon LinkedIn ↗
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Blendecques, Hauts-de-France
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-7 text-center text-xs text-slate-500 sm:px-8 sm:text-sm">
        © 2026 Enzo De Sousa — Développeur Web
      </footer>
    </main>
  );
}
