import Header from "../blocks/modules/header/header";
import Form from "../blocks/modules/form/form";
import ScrollTo from "./modules/scrollTo";
import checkAnchor from "./modules/checkAnchor";
import ToggleElement from "./modules/ToggleElement";
import WelcomeTypedText from "./modules/WelcomeTypedText";
import VideoPreview from "../blocks/modules/video-preview";

import testScreen from "./modules/test-screen";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
Fancybox.defaults.Hash = false;

import { Collapse } from './modules/collapse';
import { ScreensSlider } from './modules/screens-slider';
import { VideoReviewsSlider } from './modules/video-reviews-slider';


testScreen();


document.addEventListener("DOMContentLoaded", function () {
  checkAnchor();
  Header.init();
  ScrollTo.init();
  //form
  document.querySelectorAll(".welcome-form").forEach($this => {
    new Form($this).init();
  });
  //toggle
  document.querySelectorAll("[data-toggle=\"parent\"]").forEach($this => {
    new ToggleElement($this).init();
  });

  //typedText
  const WelcomeTypedTextElement = document.querySelector('.welcome-typed-text');
  if (WelcomeTypedTextElement) new WelcomeTypedText(WelcomeTypedTextElement).init();

  //video preview
  document.querySelectorAll('.video-preview').forEach(element => {
    new VideoPreview(element).init();
  })

  //collapse
  document.querySelectorAll('[data-collapse="list"]').forEach(el => {
    new Collapse(el).init();
  })

  document.querySelectorAll('.screens-slider').forEach(el => {
    new ScreensSlider(el).init();
  })

  document.querySelectorAll('.video-reviews-slider').forEach(el => {
    new VideoReviewsSlider(el).init();
  })
});
