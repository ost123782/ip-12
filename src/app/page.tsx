import ImageWelcome from '../components/image_welcome'
import image__welcome1 from '@/assets/image__welcome1.jpg'
import image__welcome2 from '@/assets/image__welcome2.jpg'
import image__welcome3 from '@/assets/image__welcome3.jpg'
import LinkButton from '@/ui/link_button'

export default function Home() {
  return (
    <main>
        <ImageWelcome image={image__welcome1.src}
                      titleText={'Ласкаво просимо до ІП-12'}
                      descriptionText={'До найлегендарнішої ' +
                          'групи всього першого курсу і не тільки'}
        />
        <ImageWelcome image={image__welcome2.src}
                      titleText={'Ми для вас підготували маленьку онлайн екскурсію'}
                      descriptionText={'Для того щоб будь-яка людина могла дізнатись про нашу групу'}
        />
        <ImageWelcome image={image__welcome3.src}
                      titleText={'То ж, давайте не гаяти часу!'}
                      descriptionText={'Розпочинаємо!'}
        >
          <LinkButton link='/' title='Почати' />
        </ImageWelcome>
    </main>
  )
}
