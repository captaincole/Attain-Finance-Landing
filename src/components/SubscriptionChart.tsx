import './SubscriptionChart.css'

export default function SubscriptionChart() {
  const budget = 2000
  const spent = 1800 // 90% of budget
  const percentage = (spent / budget) * 100

  return (
    <div className="subscription-chart">
      <div className="budget-item">
        <div className="subscription-info">
          <span className="subscription-name">Monthly Budget</span>
          <span className="subscription-cost">${spent.toFixed(2)} / ${budget.toFixed(2)}</span>
        </div>
        <div className="subscription-bar-container">
          <div
            className="subscription-bar budget-bar"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
        <div className="budget-warning">
          You've used {percentage.toFixed(0)}% of your monthly budget
        </div>
      </div>
    </div>
  )
}
