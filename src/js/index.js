import Header from "../blocks/modules/header/header";
import Form from "../blocks/modules/form/form";
import ScrollTo from "./import/scrollTo";
import checkAnchor from "./import/checkAnchor";
import ToggleElement from "./import/ToggleElement";
import WelcomeTypedText from "./import/WelcomeTypedText";
import Slider from "./import/Slider";


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

  const WelcomeTypedTextElement = document.querySelector('.welcome-typed-text');
  if (WelcomeTypedTextElement) new WelcomeTypedText(WelcomeTypedTextElement).init();
});
