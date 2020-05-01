export default {
    name: 'service',
    type: 'document',
    title: 'Prestations proposées',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.error('Champ obligatoire').required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Ceci est l\'identifiant unique de l\'article utilisé dans l\'url',
        validation: Rule => Rule.error('Champ obligatoire').required(),
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      }
    ]
  }
  