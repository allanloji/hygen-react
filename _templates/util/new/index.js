module.exports = {
    prompt: ({ inquirer }) => {
      const questions = [
        {
          type: 'input',
          name: 'util_name',
          message: 'What is the util name?'
        },
        {
          type: 'input',
          name: 'dir',
          message: 'Where is the directory(Optional)',
        },
      ]
      return inquirer
        .prompt(questions)
        .then(answers => {
          const { util_name, dir } = answers
          const path = `${ dir ? `${dir}/` : `` }${util_name}`
          const absPath = `utils/${path}`
          return { ...answers, path, absPath }
        })
    }
  }