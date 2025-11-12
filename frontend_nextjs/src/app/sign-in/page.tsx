"use client";

import React, { useEffect } from "react";
import Head from "next/head";

/**
 * PUBLIC_INTERFACE
 * SignInPage
 * Renders the pixel-accurate Sign In screen extracted from Figma (screen 11:235).
 * This page embeds the static HTML structure while preserving the original layout,
 * styles, and image paths. It also loads the shared assets/common.css, the screen-
 * specific CSS/JS, and the shared assets/app.js for interactions.
 *
 * Usage:
 *  - Route: /sign-in
 *  - Ensures CSS from /assets/sign-in-11-235.css and /assets/common.css are applied.
 *  - Ensures JS from /assets/sign-in-11-235.js and /assets/app.js executes on mount.
 */
export default function SignInPage() {
  // Load the two JS assets only once on mount
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    const addScript = (src: string) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
      scripts.push(s);
    };

    // Load screen-specific then shared app script
    addScript("/assets/sign-in-11-235.js");
    addScript("/assets/app.js");

    return () => {
      // Cleanup scripts if the user navigates away
      scripts.forEach((s) => {
        try {
          document.body.removeChild(s);
        } catch {
          // ignore
        }
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sign In - 11-235</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Import common and screen CSS from root-level assets */}
        <link rel="stylesheet" href="/assets/common.css" />
        <link rel="stylesheet" href="/assets/sign-in-11-235.css" />
      </Head>
      {/* The following markup mirrors assets/sign-in-11-235.html to ensure pixel accuracy */}
      <div className="screen style-10" id="screen-11-235" role="main" aria-label="Sign In Screen">

        {/* Status Bar */}
        <div id="cmp-13-71" aria-hidden="true">
          <span id="cmp-13-71-time">19:27</span>
          {/* Battery pieces */}
          <img id="cmp-13-71-batt-306" src="/assets/figmaimages/figma_image_13_71_128_306_b5e63c63.svg" alt="battery-fill" />
          <img id="cmp-13-71-batt-307" src="/assets/figmaimages/figma_image_13_71_128_307_97b3d1ff.svg" alt="battery-outline" />
          <img id="cmp-13-71-batt-309" src="/assets/figmaimages/figma_image_13_71_128_309_907fdba9.svg" alt="battery-rect" />
          {/* Signal bars */}
          <img id="cmp-13-71-sig-311" src="/assets/figmaimages/figma_image_13_71_128_311_74e08aed.svg" alt="signal-1" />
          <img id="cmp-13-71-sig-312" src="/assets/figmaimages/figma_image_13_71_128_312_4153a623.svg" alt="signal-2" />
          <img id="cmp-13-71-sig-313" src="/assets/figmaimages/figma_image_13_71_128_313_a9f566ce.svg" alt="signal-3" />
          <img id="cmp-13-71-sig-314" src="/assets/figmaimages/figma_image_13_71_128_314_664f77c4.svg" alt="signal-4" />
        </div>

        {/* Title group */}
        <div id="el-13-110">
          <span id="txt-12-29">Hello,</span>
          <span id="txt-12-30">Welcome Back!</span>
        </div>

        {/* Email input (visual replica, absolute positioning) */}
        <div id="cmp-30-585" role="group" aria-label="Email input">
          <div id="cmp-30-585-rect" className="style-30" aria-hidden="true" />
          <span id="cmp-30-585-ph">Enter Email</span>
          <span id="cmp-30-585-label">Email</span>
        </div>

        {/* Password input (visual replica) */}
        <div id="cmp-30-590" role="group" aria-label="Password input">
          <div id="cmp-30-590-rect" className="style-30" aria-hidden="true" />
          <span id="cmp-30-590-ph">Enter Password</span>
          <span id="cmp-30-590-label">Enter Password</span>
        </div>

        {/* Forgot Password */}
        <div id="grp-12-91">
          <span id="txt-12-94">Forgot Password?</span>
        </div>

        {/* Big Button */}
        <button id="btn-54-668" type="button" aria-label="Sign In">
          <span id="btn-54-668-label">Sign In</span>
          <img
            id="btn-54-668-icon"
            src="/assets/figmaimages/figma_image_54_668_53_625_ee410d62.svg"
            alt="arrow-right"
          />
        </button>

        {/* Divider */}
        <div id="line-12-139" aria-hidden="true">
          <div id="line-12-140" />
          <div id="line-12-141" />
          <span id="txt-12-142">Or Sign in With</span>
        </div>

        {/* Social Buttons */}
        <div id="btn-13-35" role="button" tabIndex={0} aria-label="Sign in with Google">
          <div id="btn-13-35-rect" className="style-126" aria-hidden="true" />
          <div id="btn-13-35-google">
            <img id="btn-13-35-google-svg1" src="/assets/figmaimages/figma_image_13_39_ffad8cec.svg" alt="Google vector 1" />
            <img id="btn-13-35-google-svg4" src="/assets/figmaimages/figma_image_13_42_83962b79.svg" alt="Google vector 2" />
          </div>
        </div>

        <div id="btn-13-49" role="button" tabIndex={0} aria-label="Sign in with Facebook">
          <div id="btn-13-49-rect" className="style-126" aria-hidden="true" />
          <div id="btn-13-49-fb">
            <img id="btn-13-49-fb-icon" src="/assets/figmaimages/figma_image_13_61.svg" alt="Facebook icon" />
          </div>
        </div>

        {/* Bottom text */}
        <span id="txt-13-67">Don’t have an account? Sign up</span>

        {/* Home indicator */}
        <div id="cmp-42-614" aria-hidden="true">
          <div id="cmp-42-614-line" />
        </div>
      </div>
    </>
  );
}
