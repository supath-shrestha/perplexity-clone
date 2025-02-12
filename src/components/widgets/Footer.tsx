export default function Footer() {
  return (
    <div className="pb-md hidden md:block">
      <div>
        <div className="gap-x-md gap-y-sm px-sm pb-2xl flex flex-wrap items-center md:justify-center md:px-0 md:pb-0 border-borderMain/50 ring-borderMain/50 divide-borderMain/50 dark:divide-borderMainDark/50  dark:ring-borderMainDark/50 dark:border-borderMainDark/50 bg-transparent">
          <a href="/pro">
            <div>
              <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                Pro
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.perplexity.ai/enterprise">
            <div>
              <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                Enterprise
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.perplexity.supply">
            <div>
              <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                Store
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.perplexity.ai/hub">
            <div>
              <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                Blog
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.perplexity.ai/hub/careers">
            <div>
              <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                Careers
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.perplexity.com/education">
            <div>
              <div className="decoration-textOff/40 dark:decoration-textOffDark/40 hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                Education
              </div>
            </div>
          </a>
          
          <div className="gap-xs decoration-textOff/40 dark:decoration-textOffDark/40 relative flex cursor-pointer items-center justify-stretch overflow-hidden hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
            English (English)
            <div className="absolute left-0 top-0 opacity-0">
              <div>
                <div className="default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                  <div className="relative flex items-center">
                    <select
                      id="interface-language-select"
                      className="border-borderMain/75 bg-background p-sm pr-lg outline-super ring-borderMain/75 dark:border-borderMainDark dark:bg-offsetDark dark:outline-superDark dark:ring-borderMainDark w-full appearance-none rounded border transition duration-300 focus:outline-none cursor-pointer hover:ring-1"
                      aria-label="Language:"
                    >
                      <option value="en-US">English (English)</option>
                      <option value="fr-FR">French (Français)</option>
                      <option value="de-DE">Standard German (Deutsch)</option>
                      <option value="ja-JP">Japanese (日本語)</option>
                      <option value="ko-KR">Korean (한국어)</option>
                      <option value="zh-CN">
                        Simplified Chinese (简体中文)
                      </option>
                      <option value="es-ES">Spanish (Español)</option>
                      <option value="hi-IN">Hindi (हिंदी)</option>
                      <option value="it-IT">Italian (Italiano)</option>
                      <option value="pt-BR">
                        Brazilian Portuguese (Português do Brasil)
                      </option>
                      <option value="cs-CZ">Czech (Čeština)</option>
                      <option value="hr-HR">Croatian (Hrvatski)</option>
                      <option value="hu-HU">Hungarian (Magyar)</option>
                      <option value="pl-PL">Polish (Polski)</option>
                      <option value="pt-PT">Portuguese (Português)</option>
                      <option value="sk-SK">Slovak (Slovenčina)</option>
                      <option value="mk-MK">Macedonian (Македонски)</option>
                      <option value="sr-Cyrl-ME">Montenegrin (Српски)</option>
                    </select>
                    <div className="right-sm pointer-events-none absolute light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="chevron-down"
                        className="svg-inline--fa fa-chevron-down "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down fa-fw fa-xs text-textOff dark:text-textOffDark"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
