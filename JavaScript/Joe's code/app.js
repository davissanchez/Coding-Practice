// import { LightningElement } from "lwc";
// import { showToast } from "c/showToastUtility";
// import createNewCase from "@salesforce/apex/CommunityCaseController.createNewCase";

// export default class CommunityCaseForm extends LightningElement {
//   data = {};

//   isLoading = false;

//   get inputs() {
//     return this.template.querySelectorAll(
//       "lightning-input, lightning-textarea"
//     );
//   }

  reportValidity() {
    let isValid = true;

    this.inputs.forEach((input) => {
      if (!input.reportValidity()) {
        isValid = false;
      }
    });

    return isValid;
  }

  handleInputOnChange(event) {
    const key = event.target.dataset.fieldname;

    this.data[key] = event.target.value;
    console.log(this);
  }

  async handleSubmit() {
    if (!this.reportValidity()) {
      return;
    }

    try {
      this.isLoading = true;

      const record = { ...this.data };

      const caseNumber = await createNewCase({ record });

      const message = `We have recieved your customer service request #${caseNumber}. Thank you!`;

      showToast(this, "Success", message, "success", "sticky");
    } catch (error) {
      const message = `Failed to Create Case: ${error.body.message}. Please contact support.`;
      showToast(this, "Error", message, "error", "sticky");

      console.log(error, error.body.message);
    } finally {
      this.isLoading = false;
    }
  }
}
