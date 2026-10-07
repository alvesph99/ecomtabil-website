import Image from "next/image";
import Link from "next/link";
import { units } from "@/lib/units";

export function UnitsGrid() {
  return (
    <div className="units-grid">
      {units.map((unit) => (
        <Link className="unit-card" href={unit.href} key={unit.slug}>
          <span className="unit-card__image">
            <Image
              src={unit.image}
              alt=""
              fill
              sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 800px) 45vw, 30vw"
            />
            <span>{unit.state}</span>
          </span>
          <span className="unit-card__content">
            <span className="unit-card__detail">{unit.detail}</span>
            <h3>{unit.title}</h3>
            <span className="unit-card__link">
              Conhecer a unidade
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
