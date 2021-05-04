module.exports = {
    prompt: ({ inquirer }) => {
      const questions = [
        {
          type: 'input',
          name: 'component_name',
          message: 'What is the component name?'
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
          const { component_name, dir } = answers;
          const indexPath =  `${ dir ? `components/${dir}/components` : `components` }`;
          const path = `${ dir ? `${dir}/components/` : `` }${component_name}`
          const absPath = `components/${path}`
          return { ...answers, indexPath, absPath }
        })
    }
  }