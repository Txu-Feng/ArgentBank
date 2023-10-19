export default function Account({ title, amount, description}) {
    return (
      <section className='account'>
        <div className='account_content-wrapper'>
          <h3 className='account_title'>{title}</h3>
          <p className='account_amount'>{amount}</p>
          <p className='account_amount_description'>{description}</p>
        </div>
        <div className='account_content-wrapper cta'>
            <button className="transaction-button">
                View transactions
            </button>
        </div>
      </section>
    );
  }