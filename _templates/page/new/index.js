module.exports = {
    prompt: ({ inquirer }) => {
      const questions = [
        {
          type: 'input',
          name: 'page_name',
          message: 'What is the page name?'
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
          const { dir } = answers
          const path = `${ dir ? `${dir}/` : `` }`
          const absPath = `pages/${path}`
          return { ...answers, path, absPath }
        })
    }
  }