import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img
        src="https://docs.agentsyx.com/A6.png"
        alt="Agentsyx"
        style={{ height: "32px", width: "auto" }}
      />
      <span style={{ fontWeight: 600 }}>Agentsyx Help</span>
    </div>
  ),
  docsRepositoryBase: "https://github.com/findexar/userdocs",
  footer: {
    text: "Agentsyx Help — for people using an Agentsyx-powered assistant",
  },
  primaryHue: 20,
};

export default config;
