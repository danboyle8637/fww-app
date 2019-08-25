const validate = (value, rules, value2 = null) => {
  let isValid = true

  for (let rule in rules) {
    switch (rule) {
      case 'maxLength':
        isValid = isValid && maxLengthValidator(value, rules[rule])
        break

      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule])
        break

      case 'isRequired':
        isValid = isValid && requiredValidator(value)
        break

      case 'isEmail':
        isValid = isValid && emailValidator(value)
        break

      case 'isNumber': {
        isValid = isValid && numberValidator(value)
        break
      }

      case 'matchPassword': {
        isValid = isValid && matchPasswordValidator(value)
        break
      }

      default:
        isValid = true
    }
  }

  return isValid
}

const maxLengthValidator = (value, maxLength) => value.length <= maxLength

const minLengthValidator = (value, minLength) => value.length >= minLength

const requiredValidator = value => value.trim() !== ''

const emailValidator = value => {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

const numberValidator = value => !isNaN(value)

const matchPasswordValidator = (value, value2) => value === value2

export default validate
