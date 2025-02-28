import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Weapon } from "@shared/schema";
import { Link } from "wouter";
import { ArrowRight, ImageOff } from "lucide-react";
import { useState } from "react";
import { fixWikipediaImageUrl } from "@/lib/imageUtils";

interface WeaponCardProps {
  weapon: Weapon;
  isSelected: boolean;
  onClick: () => void;
}

export function WeaponCard({ weapon, isSelected, onClick }: WeaponCardProps) {
  const [imageError, setImageError] = useState(false);
  // Mapeo de una única imagen verificada para cada arma basado en su ID
  const weaponImagesMap: Record<number, string> = {
    1: "https://i.postimg.cc/L4PtG85X/gladius-romana.jpg",  // Gladius Romano
    2: "https://i.postimg.cc/wTqLbcmq/khopesh-egipcio.jpg",      // Estoque Renacentista
    3: "https://i.postimg.cc/m21jSSfP/dory-griega.jpg",          // Dory Griega
    4: "https://i.postimg.cc/4dwF6s0v/hoplon.jpg", // Hoplon
    5: "https://i.postimg.cc/Dyf4pFMJ/hacha-vikinga.jpg",                  // Hacha Vikinga
    6: "https://i.postimg.cc/X7Xd74kM/arco-compuesto-mongol.jpg", // Arco Compuesto Mongol
    7: "https://i.postimg.cc/hPdDD564/maza-de-guerra.jpg",           // Shamshir Persa
    8: "https://i.postimg.cc/Fs7MNkfj/daga-de-rondel.jpg",        // Maza de Guerra Medieval
    9: "https://i.postimg.cc/5yQzgm04/shamshir-persa.png",                  // Daga de Rondel
    10: "https://i.postimg.cc/9Mv70NPd/lanza-qiang.jpg",             // Lanza Qiang
    11: "https://i.postimg.cc/Z59VDX7m/yumi-samuria.jpg",         // Yumi Samurái
    12: "https://i.postimg.cc/g0F9GJd0/estoque-italiano.jpg",          // Montante Ibérico
    13: "https://i.postimg.cc/1t9WMB81/sweihander.jpg",         // Zweihänder Landsknecht
    14: "https://i.postimg.cc/WzVJ0Yz0/main-gauche.jpg"      // Main Gauche
  };

  // Obtener la URL de la imagen para mostrar
  const getImageUrl = () => {
    // Si existe una imagen específica para esta arma, usarla
    if (weaponImagesMap[weapon.id]) {
      return weaponImagesMap[weapon.id];
    }
   
  };
  
  const imageUrl = getImageUrl();

  return (
    <Card 
      className={`cursor-pointer transition-all hover:scale-102 ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {weapon.name}
          <Badge variant="outline">{weapon.period}</Badge>
        </CardTitle>
        <CardDescription>
          {weapon.yearStart < 0 ? Math.abs(weapon.yearStart) + " a.C." : weapon.yearStart + " d.C."} - 
          {weapon.yearEnd < 0 ? Math.abs(weapon.yearEnd) + " a.C." : weapon.yearEnd + " d.C."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md bg-muted">
          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
              <ImageOff className="w-8 h-8 text-muted-foreground mb-2" />
              <span className="text-xs text-muted-foreground">Imagen no disponible</span>
              <a 
                href={weapon.imageUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary underline mt-1"
              >
                Ver en la fuente original
              </a>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={weapon.name}
              className="object-cover w-full h-full transition-opacity"
              loading="lazy"
              onError={(e) => {
                console.error(`Error cargando imagen: ${imageUrl}`);
                setImageError(true);
              }}
              onLoad={(e) => {
                console.log(`Imagen cargada exitosamente: ${imageUrl}`);
                const img = e.target as HTMLImageElement;
                img.style.opacity = '1';
              }}
              style={{ opacity: 0 }}
            />
          )}
        </div>
        <p className="text-sm mb-4 line-clamp-2">{weapon.description}</p>
        <Link href={`/arma/${weapon.id}`}>
          <Button className="w-full">
            Ver más detalles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}