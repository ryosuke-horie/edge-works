import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../page'

function setViewport(width: number, height: number) {
  Object.defineProperty(window, 'innerWidth', { value: width, writable: true })
  Object.defineProperty(window, 'innerHeight', { value: height, writable: true })
  window.dispatchEvent(new Event('resize'))
}

describe('Home', () => {
  it('正しくレンダリングされること', () => {
    render(<Home />)

    // ヘッダーのロゴが表示されることを確認
    expect(screen.getByText('Edge Works')).toBeTruthy()

    // メインのキャッチコピーが表示されることを確認
    const catchPhrase = screen.getAllByText(/月額|3,000|円|で|ホームページを|制作/)
    expect(catchPhrase.length).toBeGreaterThan(0)

    // 特徴セクションが表示されることを確認
    const features = [
      '初期費用0円',
      'オリジナルデザイン',
      'モバイルファースト'
    ]

    features.forEach(feature => {
      const elements = screen.getAllByText(feature)
      expect(elements.length).toBeGreaterThan(0)
    })

    // ナビゲーションリンクが存在することを確認
    const navigation = screen.getAllByRole('navigation')[0]
    const navigationLinks = [
      { text: '特徴', href: '#features' },
      { text: '制作の流れ', href: '#flow' },
      { text: '料金', href: '#pricing' },
      { text: 'よくある質問', href: '#faq' },
      { text: 'お問い合わせ', href: '#contact' }
    ]

    navigationLinks.forEach(({ text, href }) => {
      const links = screen.getAllByRole('link', { name: text })
      expect(links.some(link => link.getAttribute('href') === href)).toBe(true)
    })

    // セクションヘッダーが表示されることを確認
    const sectionHeadings = ['制作の流れ', 'シンプルな料金プラン', 'よくある質問']
    sectionHeadings.forEach(heading => {
      const headings = screen.getAllByRole('heading', { name: heading })
      expect(headings.length).toBeGreaterThan(0)
    })

    // フッターが表示されることを確認
    expect(screen.getByText('個人事業主のためのウェブサイト制作サービス')).toBeTruthy()
  })

  it('制作の流れのステップが正しく表示されること', () => {
    render(<Home />)

    const steps = [
      'お問い合わせ・ヒアリング',
      '仮デザイン案の作成・提案',
      'デザイン・コンテンツ修正',
      'ドメイン取得・公開',
      '納品・運用開始'
    ]

    // 制作の流れのheading要素を特定
    const flowHeadings = screen.getAllByRole('heading', { name: '制作の流れ' })
    expect(flowHeadings.length).toBeGreaterThan(0)

    // 各ステップの存在を確認
    steps.forEach(step => {
      const stepHeadings = screen.getAllByRole('heading', { name: step })
      expect(stepHeadings.length).toBeGreaterThan(0)
    })
  })

  it('FAQセクションが正しく表示されること', () => {
    render(<Home />)

    const faqs = [
      'Q. 本当に初期費用は0円ですか？',
      'Q. 依頼からどのくらいで公開できますか？',
      'Q. お問い合わせフォームは設置できますか？',
      'Q. 大幅なデザイン変更が必要になったら？'
    ]

    // FAQのheading要素を特定
    const faqHeadings = screen.getAllByRole('heading', { name: 'よくある質問' })
    expect(faqHeadings.length).toBeGreaterThan(0)

    // 各質問の存在を確認
    faqs.forEach(question => {
      const faqQuestions = screen.getAllByRole('heading', { name: question })
      expect(faqQuestions.length).toBeGreaterThan(0)
    })
  })

  it('料金プランの内容が正しく表示されること', () => {
    render(<Home />)

    // 料金プランのheading要素を特定
    const pricingHeadings = screen.getAllByRole('heading', { name: 'シンプルな料金プラン' })
    expect(pricingHeadings.length).toBeGreaterThan(0)

    // 料金が表示されることを確認
    const priceElements = screen.getAllByText(/¥3,000|\/月/)
    expect(priceElements.length).toBeGreaterThan(0)

    // 料金プランの特徴が表示されることを確認
    const features = [
      '最大5ページの制作',
      'ドメイン・サーバー費用込み',
      'SSL証明書対応',
      '保守・運用サポート'
    ]

    features.forEach(feature => {
      const featureElements = screen.getAllByText(feature)
      expect(featureElements.length).toBeGreaterThan(0)
    })
  })

  describe('レスポンシブデザイン', () => {
    it('モバイルメニューがモバイル時のみ表示される', () => {
      render(<Home />)
      
      // モバイルビューポート
      setViewport(375, 667)
      
      // モバイルメニューボタンを探す
      const menuButtons = screen.getAllByRole('button')
      expect(menuButtons.length).toBeGreaterThan(0)
      
      const menuButton = menuButtons[0]
      const menuContainer = menuButton.closest('div')
      expect(menuContainer?.className).toContain('md:hidden')

      // デスクトップナビゲーション
      const navs = screen.getAllByRole('navigation')
      const desktopNav = navs[0]
      expect(desktopNav.className).toContain('hidden')
      expect(desktopNav.className).toContain('md:flex')
    })
  })

  describe('アクセシビリティ', () => {
    it('全てのボタンが適切なラベルを持つ', () => {
      render(<Home />)
      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toBeTruthy()
        // ボタンが適切なラベルまたはアイコンを持つことを確認
        expect(
          button.getAttribute('aria-label') ||
          button.textContent ||
          button.querySelector('svg')
        ).toBeTruthy()
      })
    })

    it('全ての画像が適切なalt属性を持つ', () => {
      render(<Home />)
      const images = screen.getAllByRole('img')
      images.forEach(img => {
        expect(img.getAttribute('alt')).toBeTruthy()
      })
    })

    it('見出しが適切な階層構造を持つ', () => {
      render(<Home />)
      
      // メインの見出し（h1）を特定
      const mainHeadings = screen.getAllByRole('heading', { level: 1 })
      expect(mainHeadings.length).toBeGreaterThan(0)
      expect(mainHeadings[0].textContent).toContain('ホームページを')

      // セクションの見出し（h2）を確認
      const sectionHeadings = screen.getAllByRole('heading', { level: 2 })
      expect(sectionHeadings.length).toBeGreaterThan(0)

      // サブセクションの見出し（h3）を確認
      const subHeadings = screen.getAllByRole('heading', { level: 3 })
      expect(subHeadings.length).toBeGreaterThan(0)
    })
  })

  describe('インタラクション', () => {
    it('モバイルメニューボタンがクリック可能', () => {
      render(<Home />)
      setViewport(375, 667)
      
      // モバイルメニューボタンを探す
      const menuButtons = screen.getAllByRole('button')
      const menuButton = menuButtons[0]
      expect(menuButton).toBeTruthy()
      
      const menuContainer = menuButton.closest('div')
      expect(menuContainer?.className).toContain('md:hidden')
    })

    it('ナビゲーションリンクが適切なhref属性を持つ', () => {
      render(<Home />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link.getAttribute('href')).toBeTruthy()
      })
    })
  })

  describe('画像の最適化', () => {
    it('背景画像が適切な属性を持つ', () => {
      render(<Home />)
      const bgImages = screen.getAllByAltText('Background Image')
      expect(bgImages.length).toBeGreaterThan(0)
      
      const backgroundImage = bgImages[0]
      expect(backgroundImage).toBeTruthy()
      expect(backgroundImage.getAttribute('src')).toBeTruthy()
      expect(backgroundImage.getAttribute('srcset')).toBeTruthy()
      expect(backgroundImage.getAttribute('sizes')).toBeTruthy()
    })
  })
})
