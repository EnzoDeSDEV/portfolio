
import Image from "next/image";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPhp,
  SiDrupal,
  SiSymfony,
  SiGo,
  SiGit,
  SiGitlab,
  SiDocker,
} from "react-icons/si";

import { FaUsers } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

// COMPÉTENCES
const skills = [
  {
    category: "Front-end",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Drupal", icon: SiDrupal, color: "#0678BE" },
      { name: "Notions de Symfony", icon: SiSymfony, color: "#FFFFFF" },
      { name: "Notions de Go", icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    category: "Outils & méthodes",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D7" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Scrum", icon: FaUsers, color: "#22D3EE" },
    ],
  },
];

// PROJETS PROFESSIONNELS
const projects = [
  {
    number: "01",
    title: "SSO — Authentification",
    brand: "La Voix du Nord",
    image: "/projects/sso.png",
    description:
      "Participation au développement et à la maintenance du système d'authentification Rossel Connect, utilisé par plusieurs marques du Groupe Rossel. Contribution aux parcours de connexion et d'inscription, à l'intégration des interfaces et à la correction d'anomalies.",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
    link: "https://www.lavoixdunord.fr/",
  },
  {
    number: "02",
    title: "GPG — Gestion du profil",
    brand: "Le Soir",
    image: "/projects/gpg.png",
    description:
      "Développement et maintenance des interfaces de gestion des comptes utilisateurs : consultation et modification des informations personnelles, gestion des préférences et intégration des API. Participation aux évolutions fonctionnelles et à la résolution des anomalies.",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "API", icon: null, color: null },
      { name: "Gestion de compte", icon: null, color: null },
    ],
    link: "https://www.lesoir.be/",
  },
  {
    number: "03",
    title: "PCG — Parcours d'abonnement",
    brand: "Sudinfo",
    image: "/projects/pcg.png",
    description:
      "Contribution au développement et à la maintenance des parcours d'abonnement numériques. Travail sur les interfaces de présentation des offres, les évolutions fonctionnelles et les corrections afin d'améliorer l'expérience de souscription des utilisateurs.",
    tags: [
      { name: "Drupal", icon: SiDrupal, color: "#0678BE" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "B2C", icon: null, color: null },
    ],
    link: "https://www.sudinfo.be/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1120] text-slate-100">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 lg:px-6">
          <a
            href="#home"
            aria-label="Enzo De Sousa - Retour à l'accueil"
            className="shrink-0 font-mono text-xl font-bold tracking-tight sm:text-2xl"
          >
            <span className="text-cyan-400">{"<"}</span>
            <span className="text-white">EnzoDeSousa</span>
            <span className="text-cyan-400">{"/>"}</span>
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
                alt="Photo de profil d'Enzo De Sousa"
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
                href="https://www.linkedin.com/in/enzo-de-sousa/"
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
                <h3 className="mb-6 text-lg font-semibold sm:text-xl">
                  {skill.category}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {skill.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#0b1120] p-3 text-center transition hover:-translate-y-1 hover:border-cyan-400/50 sm:p-4"
                      >
                        <Icon
                          size={32}
                          style={{ color: item.color }}
                          aria-hidden="true"
                        />
                        <span className="text-xs font-medium leading-5 text-slate-300 sm:text-sm">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
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

      {/* PROJETS AVEC CAPTURES ET LOGOS */}
      <section
        id="projects"
        className="scroll-mt-20 py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-6">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
            <span className="text-cyan-400">04.</span> Projets
          </h2>

          <p className="mb-10 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
            Découvrez trois projets professionnels auxquels j&apos;ai
            contribué durant mon alternance au sein du Groupe Rossel.
            Ces applications accompagnent les utilisateurs dans
            leurs parcours de connexion, de gestion de compte
            et d&apos;abonnement numérique.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111a2e] transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/5 lg:hover:-translate-y-1"
              >
                {/* IMAGE */}
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir la capture du projet ${project.title}`}
                  className="relative block aspect-video overflow-hidden bg-[#e8edf3]"
                >
                  <Image
                    src={project.image}
                    alt={`Interface du projet ${project.title} — ${project.brand}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <span className="absolute bottom-3 left-3 rounded-md bg-[#0b1120]/95 px-3 py-1.5 text-xs font-semibold text-cyan-400">
                    {project.brand}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-md bg-[#0b1120]/90 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Agrandir ↗
                  </span>
                </a>

                {/* DESCRIPTION */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="mb-3 text-xs font-bold tracking-widest text-cyan-400">
                    {project.number} / PROJET PROFESSIONNEL
                  </p>

                  <h3 className="mb-4 text-xl font-bold leading-snug text-white">
                    {project.title}
                  </h3>

                  <p className="mb-7 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* TAGS AVEC LOGOS */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const Icon = tag.icon;

                      return (
                        <span
                          key={tag.name}
                          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0b1120] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-cyan-400/40"
                        >
                          {Icon && (
                            <Icon
                              size={17}
                              style={{ color: tag.color ?? undefined }}
                              aria-hidden="true"
                            />
                          )}
                          {tag.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* LIENS */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      Découvrir le site ↗
                    </a>
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 transition-colors hover:text-white"
                    >
                      Voir la capture ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-xs leading-6 text-slate-500">
            Captures d&apos;interfaces illustrant les projets
            auxquels j&apos;ai contribué dans le cadre de mon alternance.
            Les développements ont été réalisés en collaboration
            avec les équipes techniques du Groupe Rossel.
            Les dépôts de code source ne sont pas publics.
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
