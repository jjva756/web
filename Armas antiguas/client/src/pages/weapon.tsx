import { useRoute } from "wouter";
import { weapons } from "@/data/weapons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function WeaponPage() {
  const [, params] = useRoute("/arma/:id");
  const weaponId = params?.id ? parseInt(params.id) : null;
  const weapon = weapons.find(w => w.id === weaponId);

  if (!weapon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">Arma no encontrada</h1>
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al catálogo
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg border">
              <img
                src={weapon.imageUrl}
                alt={weapon.name}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{weapon.name}</h1>
            <Badge className="mb-4" variant="secondary">{weapon.period}</Badge>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              <span>
                {weapon.yearStart < 0 ? Math.abs(weapon.yearStart) + " a.C." : weapon.yearStart + " d.C."} - 
                {weapon.yearEnd < 0 ? Math.abs(weapon.yearEnd) + " a.C." : weapon.yearEnd + " d.C."}
              </span>
            </div>

            <div className="prose prose-stone dark:prose-invert">
              <h2 className="text-2xl font-semibold mb-2">Descripción</h2>
              <p className="mb-6">{weapon.description}</p>

              <h2 className="text-2xl font-semibold mb-2">Contexto Cultural</h2>
              <p>{weapon.culturalContext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
