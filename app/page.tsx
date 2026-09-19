/* oxlint-disable next/no-img-element */
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Droplets,
  FlaskConical,
  Moon,
  ShieldCheck,
  Sun,
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const concerns = [
  ['01', '朝しっかり保湿しても、夕方には乾燥を感じる'],
  ['02', '季節の変わり目に、肌がゆらぎやすい'],
  ['03', 'ベタつくケアは苦手。でも、うるおいは欲しい'],
];

const ingredients = [
  {
    code: 'A — 01',
    name: 'ECTOIN',
    ja: 'エクトイン',
    note: '乾燥などの外的環境から肌を守り、うるおいを保つコンディショニング成分。',
  },
  {
    code: 'A — 02',
    name: 'NMF BLEND',
    ja: 'NMFサポート成分',
    note: 'PCA-Naとアミノ酸を組み合わせ、角層へすばやく水分を届けます。',
  },
  {
    code: 'A — 03',
    name: 'CERAMIDE NP',
    ja: 'セラミドNP',
    note: '角層のすき間をうるおいで満たし、なめらかな肌印象へ整えます。',
  },
];

const faqs = [
  ['敏感肌でも使えますか？', '敏感肌を考えた処方設計で、パッチテストを実施しています。ただし、すべての方に皮膚刺激が起きないということではありません。心配な場合は少量からお試しください。'],
  ['どのタイミングで使いますか？', '朝晩の洗顔後、化粧水で肌を整えたあとにお使いください。その後、乳液やクリームを重ねるのがおすすめです。'],
  ['1本でどのくらい使えますか？', '1回2〜3滴を朝晩使用した場合、約45日分が目安です。使用量により前後します。'],
  ['香りはありますか？', '香料は使用していません。原料由来のわずかな香りを感じる場合があります。'],
];

export default function Home() {
  return (
    <main id="top">
      <div className="demo-notice">PORTFOLIO DEMO — FICTIONAL SKINCARE BRAND</div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="MIZUHA トップへ">
          MIZUHA<span>SKIN SCIENCE</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#concept">Concept</a>
          <a href="#product">Product</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#purchase">商品を見る</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="section-code">01 — HYDRATION / BARRIER</p>
          <p className="hero-kicker">水分を与えるだけで終わらない。</p>
          <h1 id="hero-title">
            満たして、守る。
            <br />
            うるおいの新習慣。
          </h1>
          <p className="hero-description">
            乾燥でゆらぎやすい肌に、みずみずしい一滴を。
            <br />
            MIZUHAは、角層のうるおい環境に着目した保湿美容液です。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#purchase">
              美容液を詳しく見る <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p>
              30mL <strong>5,940円</strong><small>（税込）</small>
            </p>
          </div>
          <ul className="hero-points" aria-label="製品特徴">
            <li>無香料</li>
            <li>アルコールフリー</li>
            <li>敏感肌パッチテスト済み*</li>
          </ul>
        </div>

        <div className="hero-visual">
          <img
            src={`${basePath}/images/mizuha-hero.jpg`}
            alt="水面と氷のようなアクリルの上に置かれた美容液ボトル"
            width="2200"
            height="1238"
            fetchPriority="high"
          />
          <div className="formula-tag" aria-hidden="true">
            <span>FORMULA</span>
            <strong>W-03</strong>
          </div>
          <p className="visual-caption">HYDRATING BARRIER SERUM / 30mL</p>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>SCROLL TO DISCOVER</span>
          <i />
          <b>01</b>
        </div>
      </section>

      <section className="proof-strip" id="concept" aria-label="ブランドコンセプト">
        <p>肌に必要なのは、足し続けることではなく、保てる環境をつくること。</p>
        <span>MIZUHA BARRIER PHILOSOPHY</span>
      </section>

      <section className="concerns section-pad" aria-labelledby="concerns-title">
        <header className="section-heading split-heading">
          <div>
            <p className="section-code">02 — YOUR SKIN, TODAY</p>
            <h2 id="concerns-title">こんな乾燥サイン、<br />感じていませんか。</h2>
          </div>
          <p>環境や生活リズムで、肌のコンディションは毎日変化します。だからこそ、続けやすく、肌負担を考えた保湿設計を。</p>
        </header>
        <ol className="concern-list">
          {concerns.map(([number, text]) => (
            <li key={number}>
              <span>{number}</span>
              <p>{text}</p>
              <i aria-hidden="true">→</i>
            </li>
          ))}
        </ol>
      </section>

      <section className="mechanism" id="product" aria-labelledby="mechanism-title">
        <div className="mechanism-image">
          <img
            src={`${basePath}/images/serum-texture.jpg`}
            alt="透明な美容液が水面へ広がるテクスチャー"
            width="1800"
            height="1200"
            loading="lazy"
          />
          <span>WATER HOLDING SYSTEM</span>
        </div>
        <div className="mechanism-copy">
          <p className="section-code">03 — THREE-LAYER HYDRATION</p>
          <h2 id="mechanism-title">水分を届け、<br />抱え込み、守る。</h2>
          <p className="lead">軽やかなのに、うるおいは続く。3つの保湿アプローチで角層をすこやかに整えます。</p>
          <div className="mechanism-steps">
            <article>
              <Droplets aria-hidden="true" />
              <span>STEP 01</span>
              <h3>届ける</h3>
              <p>みずみずしい美容液が、角層のすみずみまでなじみます。</p>
            </article>
            <article>
              <FlaskConical aria-hidden="true" />
              <span>STEP 02</span>
              <h3>抱える</h3>
              <p>うるおい成分が水分を抱え、やわらかな肌へ整えます。</p>
            </article>
            <article>
              <ShieldCheck aria-hidden="true" />
              <span>STEP 03</span>
              <h3>守る</h3>
              <p>乾燥を防ぎ、なめらかなコンディションを保ちます。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ingredients section-pad" id="ingredients" aria-labelledby="ingredients-title">
        <header className="section-heading centered-heading">
          <p className="section-code">04 — KEY INGREDIENTS</p>
          <h2 id="ingredients-title">必要なものを、必要なだけ。</h2>
          <p>肌へのなじみと保湿の持続を考え、3つのキー成分を組み合わせました。</p>
        </header>
        <div className="ingredient-grid">
          {ingredients.map((ingredient) => (
            <article key={ingredient.code}>
              <span className="ingredient-code">{ingredient.code}</span>
              <div className="ingredient-orbit" aria-hidden="true"><i /></div>
              <h3>{ingredient.name}</h3>
              <strong>{ingredient.ja}</strong>
              <p>{ingredient.note}</p>
              <small>配合目的：保湿・整肌</small>
            </article>
          ))}
        </div>
      </section>

      <section className="free-from" aria-label="フリー処方">
        <p className="section-code">FREE FROM</p>
        <ul>
          {['香料', '着色料', '鉱物油', 'エタノール', 'パラベン'].map((item) => (
            <li key={item}><Check size={16} aria-hidden="true" /> {item}フリー</li>
          ))}
        </ul>
        <p className="free-note">*すべての方に皮膚刺激が起きないということではありません。</p>
      </section>

      <section className="ritual" aria-labelledby="ritual-title">
        <div className="ritual-copy">
          <p className="section-code">05 — DAILY RITUAL</p>
          <h2 id="ritual-title">朝も、夜も。<br />肌に水分の余白を。</h2>
          <p>化粧水のあと、2〜3滴を手のひらに。顔の中心から外側へ、包み込むようになじませます。</p>
          <div className="ritual-time">
            <span><Sun size={20} aria-hidden="true" /><b>MORNING</b>メイク前にも軽やか</span>
            <span><Moon size={20} aria-hidden="true" /><b>NIGHT</b>一日の終わりの保湿に</span>
          </div>
        </div>
        <div className="ritual-image">
          <img
            src={`${basePath}/images/morning-ritual.jpg`}
            alt="明るい洗面台で美容液ボトルを手に持つ朝のスキンケアシーン"
            width="1200"
            height="1800"
            loading="lazy"
          />
          <p>2–3 DROPS / TWICE A DAY</p>
        </div>
      </section>

      <section className="voices section-pad" aria-labelledby="voices-title">
        <header className="section-heading split-heading">
          <div>
            <p className="section-code">06 — VOICES</p>
            <h2 id="voices-title">毎日のケアに、<br />心地よい手応えを。</h2>
          </div>
          <p>Portfolio Demo / 以下はデザイン確認用のサンプルレビューです。</p>
        </header>
        <div className="voice-grid">
          <blockquote>
            <span>01</span>
            <p>水のように軽いのに、肌がしっとり。朝のメイク前にも使いやすいです。</p>
            <footer>30代 / 乾燥肌 — SAMPLE</footer>
          </blockquote>
          <blockquote>
            <span>02</span>
            <p>季節の変わり目にも取り入れやすい、シンプルな使い心地が好き。</p>
            <footer>20代 / 混合肌 — SAMPLE</footer>
          </blockquote>
          <blockquote>
            <span>03</span>
            <p>ベタつきにくく、夜はクリームとの重ね使いもしやすいと感じました。</p>
            <footer>40代 / 普通肌 — SAMPLE</footer>
          </blockquote>
        </div>
      </section>

      <section className="purchase" id="purchase" aria-labelledby="purchase-title">
        <div className="purchase-visual">
          <img
            src={`${basePath}/images/mizuha-hero.jpg`}
            alt="MIZUHA保湿美容液の商品イメージ"
            width="2200"
            height="1238"
            loading="lazy"
          />
        </div>
        <div className="purchase-card">
          <p className="section-code">MIZUHA / FORMULA W-03</p>
          <h2 id="purchase-title">HYDRATING<br />BARRIER SERUM</h2>
          <p className="product-ja">ハイドレーティング バリア セラム</p>
          <dl>
            <div><dt>内容量</dt><dd>30mL</dd></div>
            <div><dt>使用目安</dt><dd>約45日</dd></div>
            <div><dt>送料</dt><dd>全国一律無料</dd></div>
          </dl>
          <div className="price-row"><strong>5,940円</strong><small>（税込）</small></div>
          <a className="purchase-button" href="#demo-note">
            購入する（デモ） <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p id="demo-note" className="demo-note">本サイトはポートフォリオ用の架空ブランドです。実際の注文・決済は行われません。</p>
        </div>
      </section>

      <section className="faq section-pad" id="faq" aria-labelledby="faq-title">
        <header className="section-heading faq-heading">
          <p className="section-code">07 — FAQ</p>
          <h2 id="faq-title">よくあるご質問</h2>
        </header>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary><span>0{index + 1}</span>{question}<i aria-hidden="true">＋</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-message">
        <p className="section-code">MIZUHA SKIN SCIENCE</p>
        <h2>今日の一滴が、<br />明日の肌の心地よさへ。</h2>
        <a href="#purchase">商品を見る <ArrowDown size={17} aria-hidden="true" /></a>
      </section>

      <footer className="footer">
        <a className="wordmark footer-logo" href="#top">MIZUHA<span>SKIN SCIENCE</span></a>
        <p>This is a fictional brand created for portfolio purposes.</p>
        <p>© 2026 MIZUHA</p>
      </footer>

      <div className="mobile-cta" aria-label="購入ショートカット">
        <span><b>5,940円</b><small>送料無料</small></span>
        <a href="#purchase">商品を見る <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </main>
  );
}
