module.exports = {
    prompt: ({ inquirer }) => {
      const questions = [
        {
          type: 'input',
          name: 'hook_name',
          message: 'What is the hook name?'
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
          const { hook_name, dir } = answers
          const path = `${ dir ? `${dir}/` : `` }${hook_name}`
          const absPath = `hooks/${path}`
          return { ...answers, path, absPath }
        })
    }
  }