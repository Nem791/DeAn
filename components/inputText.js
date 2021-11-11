async function inputText(inputType, inputTitle, inputText, fireFunction) {
    const { value: text } = await Swal.fire({
        input: inputType,
        inputLabel: inputTitle,
        inputPlaceholder: inputText,
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text) {
        fireFunction(text);
      }
}

export {inputText};