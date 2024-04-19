import ThemeSwitcher from "./components/theme-switcher";
import Resume from "./ui/resume.json";
import LinkedInIcon from "./ui/icons/linkedin-icon";
import EmailIcon from "./ui/icons/email-icon";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col px-4 py-3 sm:p-12 xl:px-32 2xl:px-48 2xl:py-24">
      <ThemeSwitcher />
      {/* About Me Section */}
      <div className="flex flex-row flex-wrap my-28 lg:mx-12 2xl:mx-40">
        <div className="lg:w-1/3 m-auto">
          <img src="/headshot.jpg" alt="Anisha Mohan's Headshot" className="rounded-full h-32 w-32 lg:h-72 lg:w-72" />
        </div>
        <div className="lg:w-2/3 text-center inline-block my-10 lg:m-auto">
          <h1 className="font-bold text-3xl mb-3">Hi, I'm <span className="text-purple dark:text-light-teal transition-all transaction-color duration-300 ease-in-out">Anisha Mohan</span>!</h1>
          <p className="space-y-1 font-base">
            I am a Full Stack Software Engineer and Product Manager with a passion for leveraging technology to solve real-life problems. I approach every challenges with a blend of innovation, compassion, and curiousity.
            <br />
            Outside of work, I love reading, exploring the world, and everything horror related.
          </p>
          <div className="mt-3">
            <a href="https://www.linkedin.com/in/anishamohan/" title="Check out my LinkedIn" target="_blank" className="inline-block mr-2"><LinkedInIcon /></a>
            <a href="mailto:anisha0713@gmail.com?subject=Hello!" title="Email me" className="inline-block"><EmailIcon /></a>
          </div>
        </div>
      </div>
      <hr className="h-px mt-11 mb-8 bg-black border-0 dark:bg-white w-full" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:my-10 place-content-center">
        {/* Skills */}
        <div className="rounded-md p-6 w-full bg-light-grey dark:bg-dark-grey drop-shadow-lg">
          <h3 className="text-xl font-bold pb-1">Skills</h3>
          <div className="mt-2">
            <p className="font-light py-0.5">Progamming Languages</p>
            {Resume.skills.programmingLanguages.map((val) => (<span className="rounded-lg bg-light-teal dark:bg-dark-teal drop-shadow-md font-bold py-1 px-2 m-1 inline-block">{val}</span>))}
          </div>
          <div className="mt-2">
            <p className="font-light py-0.5">Libraries & Frameworks</p>
            {Resume.skills.librariesFrameworks.map((val) => (<span className="rounded-lg bg-light-purple dark:bg-dark-purple drop-shadow-md font-bold py-1 px-2 m-1 inline-block">{val}</span>))}
          </div>
          <div className="mt-2">
            <p className="font-light py-0.5">Databases</p>
            {Resume.skills.databases.map((val) => (<span className="rounded-lg bg-light-orange dark:bg-dark-orange drop-shadow-md font-bold py-1 px-2 m-1 inline-block">{val}</span>))}
          </div>
          <div className="mt-2">
            <p className="font-light py-0.5">CI/CD</p>
            {Resume.skills.ciCd.map((val) => (<span className="rounded-lg bg-light-teal dark:bg-dark-teal drop-shadow-md font-bold py-1 px-2 m-1 inline-block">{val}</span>))}
          </div>
          <div className="mt-2">
            <p className="font-light py-0.5">Cloud Computing</p>
            {Resume.skills.cloudComputing.map((val) => (<span className="rounded-lg bg-light-purple dark:bg-dark-purple drop-shadow-md font-bold py-1 px-2 m-1 inline-block">{val}</span>))}
          </div>
          <div className="mt-2">
            <p className="font-light py-0.5">Tools</p>
            {Resume.skills.tools.map((val) => (<span className="rounded-lg bg-light-orange dark:bg-dark-orange drop-shadow-md font-bold py-1 px-2 m-1 inline-block">{val}</span>))}
          </div>
          <div className="mt-2">
            <p className="font-light py-0.5">Product Management</p>
            {Resume.skills.pm.map((val) => (<span className="rounded-lg bg-light-teal dark:bg-dark-teal drop-shadow-md font-bold py-1 px-2 m-1 inline-block">{val}</span>))}
          </div>
        </div>
        {/* Professional Summary */}
        <div className="rounded-md p-6 w-full bg-light-grey dark:bg-dark-grey drop-shadow-lg">
          <h3 className="text-xl font-bold pb-3">Professional Summary</h3>
          <ul className="list-disc list-inside space-y-1 [&>*:nth-child(3n+1)]:marker:text-purple [&>*:nth-child(3n-1)]:marker:text-orange [&>*:nth-child(3n)]:marker:text-teal">
            {Resume.professionalExperience.map((val) => (<li>{val}</li>))}
          </ul>
        </div>
      </div>
    </main>
  );
}
