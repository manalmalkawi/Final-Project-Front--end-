function MyHeaders() {
  return (
    <>
      <div className={'preview__header myheader'}>
        <div className={'logo'}>
          <a
            className="header market"
            href="https://themeforest.net/item/edusion-education-lms-wordpress-theme/49120881"
            target="_blank"
            rel="noopener noreferrer"
          >
            Envato Market
          </a>
        </div>

        <div className={'preview__actions '} id="js-preview">
          <div className="preview__action--buy">
            <a
              className="header-buy-now e-btn--3d -color-primary"
              href="https://themeforest.net/checkout/from_item/49120881?license=regular&amp;support=bundle_6month"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyHeaders;
