import { ItemPackage } from '@/types/content'

export function ItemPackageCard({ title, owner, description, bonus, items }: ItemPackage) {
  return (
    <div className="item-package">
      <div className="package-header">
        <h2 className="package-title">{title}</h2>
        {owner && <span className="package-owner">{owner}</span>}
      </div>

      {description?.map((paragraph, i) => (
        <p key={i} className="package-description">
          {paragraph}
        </p>
      ))}

      {bonus && <p className="package-bonus">{bonus}</p>}

      {items && items.length > 0 && (
        <div className="package-contents">
          {items.map((item) => (
            <div key={item.title} className={item.featured ? 'sub-item featured' : 'sub-item'}>
              <h3>
                {item.title}
                {item.featured && <span className="note-marker">*</span>}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
