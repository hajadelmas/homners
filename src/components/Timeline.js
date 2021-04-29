import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillHouseFill, BsNewspaper, BsFillPeopleFill, BsTools } from 'react-icons/bs'
import { MdAddAPhoto, MdPhoneInTalk } from 'react-icons/md'
import { FaInternetExplorer, FaRegHandshake, FaFileSignature } from 'react-icons/fa'
import { ImStatsDots } from 'react-icons/im'



const Timeline = () => {
    return (
        <div className='timeline_container'>
            <VerticalTimeline>

                

                {/* --------------------------- Avant la vente ---------------------------- */}

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0099CE', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="avant la mise en vente"
                    dateClassName='date_class1'
                    iconStyle={{ background: '#0099CE', color: '#fff' }}
                    icon={<BsFillHouseFill />}
                >
                    <h3 className="vertical-timeline-element-title">Evaluation du bien</h3>
                    <h4 className="vertical-timeline-element-subtitle">L'estimation est 100% gratuite et sans engagement. Notre expert réalisera l'estimation de votre bien en analysant plusieurs données :</h4>
                    
                    <ul>
                        <li>les biens en vente actuellement sur votre secteur et similaire au vôtre</li>
                        <li>les biens vendus dans les 3 derniers mois pour avoir une valeur juste des prix (document notaire, etc..)</li>
                        <li>les tendances actuelles du marché immobilier local</li>
                        <li>les points d'intérêts à proximité de votre bien</li>
                        <li>les caractéristiques techniques de votre bien (cachet particulier, piscine, étage, état général, finitions, matériaux..)</li>
                        <li>le prix de vente en l'état, et le prix de vente de votre bien si HOMNERS réalise des travaux d'embellissement pour valoriser au mieux le prix de votre bien. (Travaux réalisés par nos partenaires, et HOMNERS s'occupe de la prise en charge des frais).</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0099CE', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0099CE' }}
                    date="avant la mise en vente"
                    dateClassName='date_class1'
                    iconStyle={{ background: '#0099CE', color: '#fff' }}
                    icon={<MdAddAPhoto />}
                >
                    <h3 className="vertical-timeline-element-title">PHOTOS PROFESSIONNELLES</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                    <p>
                    Diffuser des annonces avec des photos faites par un photographe augmente l'intérêt des prospects de plus de 70% !  des photos professionnelles (appareils aux normes + éclairage) du bien à vendre sont réalisées afin d’augmenter l'intérêt de votre annonce, ainsi qu'un shooting avec le photographe dans un deuxième temps.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0099CE', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0099CE' }}
                    date="avant la mise en vente"
                    dateClassName='date_class1'
                    iconStyle={{ background: '#0099CE', color: '#fff' }}
                    icon={<BsNewspaper />}
                >
                    <h3 className="vertical-timeline-element-title">FICHE TECHNIQUE DU BIEN</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                    <p>
                    Toutes les informations techniques de votre bien seront notées par l'expert sur une fiche descriptive lors du rendez-vous d'estimation afin d'avoir tous les éléments nécessaire à fournir aux potentiels acquéreurs.
                    Cette fiche est transmise aux prospects avant chaque visite.
                    </p>
                </VerticalTimelineElement>

                {/* <h1>Pendant la vente</h1> */}

                {/* --------------------------- Pendant la vente ---------------------------- */}

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#C8E7FA', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #C8E7FA' }}
                    date="pendant la mise en vente"
                    dateClassName='date_class2'
                    iconStyle={{ background: '#C8E7FA', color: '#fff' }}
                    icon={<FaInternetExplorer />}
                >
                    <h3 className="vertical-timeline-element-title">PUBLICITE INTERNET</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                    <p>
                    Une fois validée, les annonces sont automatiquement diffusées sur les sites Internet principaux. Aujourd’hui, 95% des acheteurs trouvent leurs biens en naviguant sur des sites d’annonces immobilières.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#C8E7FA', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #C8E7FA' }}
                    date="pendant la mise en vente"
                    dateClassName='date_class2'
                    iconStyle={{ background: '#C8E7FA', color: '#fff' }}
                    icon={<MdPhoneInTalk />}
                >
                    <h3 className="vertical-timeline-element-title">SECRETARIAT TELEPHONIQUE</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ne vous embêtez pas ! nous réceptionnons tous les appels, mails, et sms de la part des clients intéressés par les annonces:</h4>
                    <ul>
                        <li>gestions des appels et mails qui suivront la diffusion des annonces</li>
                        <li>nous analysons le profil et la solvabilité des potentiels clients qui souhaitent visiter votre bien, afin de ne sélectionner que les profils viables et avec un financement validé, et non des curieux.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#C8E7FA', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #C8E7FA' }}
                    date="pendant la mise en vente"
                    dateClassName='date_class2'
                    iconStyle={{ background: '#C8E7FA', color: '#fff' }}
                    icon={<BsFillPeopleFill />}
                >
                    <h3 className="vertical-timeline-element-title">GESTION DES VISITES</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
                    <p>
                    Dans le cadre du forfait plus et premium, nous réalisons les visites, le compte rendu, et un suivi prospect.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#C8E7FA', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  #C8E7FA' }}
                    date="pendant la mise en vente"
                    dateClassName='date_class2'
                    iconStyle={{ background: '#C8E7FA', color: '#fff' }}
                    icon={<ImStatsDots />}
                >
                    <h3 className="vertical-timeline-element-title">REPORTING PERFORMANCE ET SUIVI</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Vous aurez mensuellement par mail un reporting intégral de la performance de votre annonce, ainsi qu'un compte rendu précis de chaque visite réalisée
                    </p>
                </VerticalTimelineElement>

                {/* --------------------------- Après la vente ---------------------------- */}

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#499f68', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #499f68' }}
                    date="Apres la mise en vente"
                    dateClassName='date_class3'
                    iconStyle={{ background: '#499f68', color: '#fff' }}
                    icon={<FaRegHandshake />}
                >
                    <h3 className="vertical-timeline-element-title">NEGOCIATION DES OFFRES</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                    Votre expert local s'occupe de la négociation avec l’acheteur. Le processus de vente peut s’avérer compliqué et stressant ? Le prix proposé est-il juste ? Quelle contre-proposition formuler ? Comment rédiger le compromis ? quelles pièces sont nécessaires au notaire ? tous ces éléments sont à prendre très au sérieux au moment de conclure une vente.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#499f68', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #499f68' }}
                    date="Apres la mise en vente"
                    dateClassName='date_class3'
                    iconStyle={{ background: '#499f68', color: '#fff' }}
                    icon={<FaFileSignature />}
                >
                    <h3 className="vertical-timeline-element-title">CONSTITUTION DES DOSSIERS DE VENTE</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                    Une fois l'offre d'achat signée, nous établissons avec vous la liste des documents à récupérer afin que le passage chez le notaire se fasse de la manière la plus simple possible.
                    (dossier de diagnostics, titre de propriété etc...)
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#499f68', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #499f68' }}
                    date="Apres la mise en vente"
                    dateClassName='date_class3'
                    iconStyle={{ background: '#499f68', color: '#fff' }}
                    icon={<BsTools />}
                >
                    <h3 className="vertical-timeline-element-title">SUIVI SUR MESURE</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
                    <p>
                    Un expert local vous accompagne durant toute la durée de la commercialisation. Il est disponible par téléphone (sms compris) pour répondre à toutes vos questions et vous assister jusqu’à la signature chez le notaire.
                    </p>
                </VerticalTimelineElement>



                {/* <VerticalTimelineElement
                    iconStyle={{ background: '#fff', color: '#fff' }}
                    icon={<GrValidate />}
                /> */}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
