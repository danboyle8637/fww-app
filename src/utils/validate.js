const validate = (value, rules, value2 = null) => {
  let isValid = true
  const cleanValue = value.trim()
  const cleanValue2 = value2 ? value2.trim() : null

  for (let rule in rules) {
    switch (rule) {
      case 'maxLength':
        isValid = isValid && maxLengthValidator(cleanValue, rules[rule])
        break

      case 'minLength':
        isValid = isValid && minLengthValidator(cleanValue, rules[rule])
        break

      case 'isRequired':
        isValid = isValid && requiredValidator(cleanValue)
        break

      case 'isEmail':
        isValid = isValid && emailValidator(cleanValue)
        break

      case 'isNumber': {
        isValid = isValid && numberValidator(cleanValue)
        break
      }

      case 'matchPassword': {
        isValid = isValid && matchPasswordValidator(cleanValue, cleanValue2)
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

const matchPasswordValidator = (value, value2) => {
  if (value2) {
    return value === value2
  } else {
    return false
  }
}

export default validate
