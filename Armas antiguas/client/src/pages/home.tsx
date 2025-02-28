import { useState } from "react";
import { Timeline } from "@/components/Timeline";
import { WeaponGrid } from "@/components/WeaponGrid";
import { weapons } from "@/data/weapons";

export default function Home() {
  const [selectedWeaponId, setSelectedWeaponId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="py-12 text-center bg-primary/5">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          Arsenal Antiguo
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Explora la fascinante historia de las armas antiguas de la península ibérica
          a través de los siglos
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Línea del Tiempo</h2>
          <Timeline
            weapons={weapons}
            selectedWeaponId={selectedWeaponId}
            onSelectWeapon={setSelectedWeaponId}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Colección de Armas</h2>
          <WeaponGrid
            weapons={weapons}
            selectedWeaponId={selectedWeaponId}
            onSelectWeapon={setSelectedWeaponId}
          />
        </section>
      </main>
    </div>
  );
}
