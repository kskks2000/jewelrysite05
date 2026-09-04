export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="OUGRO 홈">OUGRO</a>
        <nav aria-label="주요 메뉴">
          <a href="#maison">MAISON</a>
          <a href="#collection">COLLECTION</a>
          <a href="#atelier">PRIVATE ATELIER</a>
        </nav>
        <a className="header-cta" href="#commission">VIP 예약</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-visual" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">SEOUL · PRIVATE MAISON</p>
          <h1 id="hero-title">DESIRE,<br /><em>Reserved.</em></h1>
          <p className="hero-copy">평범함이 닿지 못하는 곳.<br />오직 당신을 위해 완성되는 향과 시간.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#collection">컬렉션 감상</a>
            <a className="text-link" href="#maison">OUGRO의 세계관 <span>↘</span></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>ÉDITION N° 01</span><i /><span>2026</span></div>
        <a className="scroll-cue" href="#maison" aria-label="다음 섹션으로 이동"><span />SCROLL TO ENTER</a>
      </section>

      <section className="manifesto" id="maison">
        <p className="section-kicker">THE MAISON</p>
        <div className="manifesto-grid">
          <h2>희소함은<br />보이는 것이 아니라<br /><em>느껴지는 것.</em></h2>
          <div className="manifesto-copy">
            <p>OUGRO는 모두를 위한 물건을 만들지 않습니다. 한 사람의 취향, 피부, 시간에서 시작해 다시는 반복되지 않을 오브제를 완성합니다.</p>
            <p className="signature">Born rare. Made personal.</p>
          </div>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div><p className="section-kicker">PRIVATE COLLECTION 01</p><h2>두 개의 감각,<br />하나의 욕망.</h2></div>
          <p>각 작품은 고유 번호와 함께 극소량 제작되며, VIP 프리뷰 이후에만 소유할 수 있습니다.</p>
        </div>
        <div className="collection-grid">
          <article className="product-card perfume">
            <div className="product-image" role="img" aria-label="OUGRO 누아르 플레임 향수" />
            <div className="product-meta"><span>01 · EXTRAIT DE PARFUM</span><span>30 PIECES</span></div>
            <h3>NOIR FLAMME</h3>
            <p>검은 장미, 사프란, 스모키 우드가 피부 위에서 피어나는 관능의 잔향.</p>
            <a href="#commission">VIP 프리뷰 요청 <span>↗</span></a>
          </article>
          <article className="product-card watch">
            <div className="product-image" role="img" aria-label="OUGRO 루즈 이터널 시계" />
            <div className="product-meta"><span>02 · HAUTE HORLOGERIE</span><span>12 PIECES</span></div>
            <h3>ROUGE ÉTERNEL</h3>
            <p>가넷 다이얼과 로즈 골드 케이스. 소유자의 시간을 새기는 단 하나의 피스.</p>
            <a href="#commission">VIP 프리뷰 요청 <span>↗</span></a>
          </article>
        </div>
      </section>

      <section className="atelier" id="atelier">
        <div className="atelier-media" role="img" aria-label="OUGRO 프라이빗 아틀리에 캠페인" />
        <div className="atelier-panel">
          <p className="section-kicker">THE PRIVATE ATELIER</p>
          <h2>당신의 욕망을<br /><em>하나의 작품으로.</em></h2>
          <p>조향사와 워치메이커의 일대일 컨설팅을 통해 소재, 향의 궤적, 다이얼과 각인까지 당신만의 언어로 설계합니다.</p>
          <ol>
            <li><span>01</span>PRIVATE CONSULTATION</li>
            <li><span>02</span>PERSONAL CREATION</li>
            <li><span>03</span>THE REVEAL</li>
          </ol>
          <a className="button button-outline" href="#commission">맞춤 제작 문의</a>
        </div>
      </section>

      <section className="commission" id="commission">
        <p className="section-kicker">BY INVITATION ONLY</p>
        <h2>소유는 구매가 아닌,<br /><em>초대에서 시작됩니다.</em></h2>
        <p>OUGRO의 첫 번째 프라이빗 컬렉션을 가장 먼저 만나보세요.</p>
        <a className="button button-light" href="mailto:private@ougro.kr?subject=OUGRO%20VIP%20예약%20문의">PRIVATE APPOINTMENT</a>
      </section>

      <footer>
        <a className="wordmark" href="#top">OUGRO</a>
        <p>SEOUL · REPUBLIC OF KOREA</p>
        <p>© 2026 OUGRO. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
