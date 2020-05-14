import S from '@sanity/desk-tool/structure-builder'
import {
  MdPerson,
  MdSettings,
  MdWork,
  MdLocalOffer,
  MdSchool,
  MdComment,
} from 'react-icons/md'
import {
  FaPencilAlt,
  FaHeart,
  FaRegLightbulb,
  FaNewspaper,
} from 'react-icons/fa'

export default () =>
  S.list()
    .title('Contenu')
    .items([
      // Singleton
      S.listItem()
        .title('Réglages généraux')
        .icon(MdSettings)
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings'),
        ),

      S.listItem()
        .title('Pages')
        .icon(FaNewspaper)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      // Singleton
      S.listItem()
        .title("À propos de l'auteur")
        .icon(MdPerson)
        .child(S.editor().schemaType('author').documentId('author')),

      S.listItem()
        .title("L'atelier d'écriture")
        .icon(FaPencilAlt)
        .child(
          S.list()
            .title("L'atelier d'écriture")
            .items([
              // Singleton
              S.listItem()
                .title('Réglages du blog')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .schemaType('blogSettings')
                    .documentId('blogSettings'),
                ),
              S.listItem()
                .title('Articles')
                .icon(FaNewspaper)
                .schemaType('post')
                .child(S.documentTypeList('post').title('Articles')),

              S.listItem()
                .title('Categories')
                .icon(MdLocalOffer)
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),

              S.listItem()
                .title('Commentaires')
                .icon(MdComment)
                .schemaType('comment')
                .child(S.documentTypeList('comment').title('Commentaires')),
            ]),
        ),

      S.listItem()
        .title('Rédaction SEO')
        .icon(MdWork)
        .child(
          S.list()
            .title('Rédaction SEO')
            .items([
              S.listItem()
                .title('Références client')
                .schemaType('project')
                .icon(FaPencilAlt)
                .child(
                  S.documentTypeList('project').title('Références client'),
                ),

              S.listItem()
                .title('Thèmes de prédilection')
                .schemaType('topic')
                .icon(FaHeart)
                .child(
                  S.documentTypeList('topic').title('Thèmes de prédilection'),
                ),

              S.listItem()
                .title('Clients')
                .icon(MdPerson)
                .schemaType('customer')
                .child(S.documentTypeList('customer').title('Clients')),

              S.listItem()
                .title('Prestations proposées')
                .icon(FaRegLightbulb)
                .schemaType('service')
                .child(S.documentTypeList('service').title('Prestations')),

              S.listItem()
                .title('Formations suivies')
                .icon(MdSchool)
                .schemaType('formation')
                .child(
                  S.documentTypeList('formation').title('Formations suivies'),
                ),
            ]),
        ),
      //   ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'author'].includes(listItem.getId()))
    ])
