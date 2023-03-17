(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

  interface InputElementProps {
    id: string;
    value: string;
    placeholder: string;
  }

  class InputElement {
    html: HtmlElement;
    attributes: InputAttributes;
    events: InputEvents;
    constructor({ id, value, placeholder }: InputElementProps) {
      this.html = new HtmlElement(id, "input");
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement({id:'txName',placeholder:'Enter first name',value:'Fernando'});
  console.log({ nameField });
})();
