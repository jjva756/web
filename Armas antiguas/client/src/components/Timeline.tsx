import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Weapon } from "@shared/schema";
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineProps {
  weapons: Weapon[];
  selectedWeaponId: number | null;
  onSelectWeapon: (id: number) => void;
}

export function Timeline({ weapons, selectedWeaponId, onSelectWeapon }: TimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sortedWeapons = [...weapons].sort((a, b) => a.yearStart - b.yearStart);
  const timelineStart = Math.min(...weapons.map(w => w.yearStart));
  const timelineEnd = Math.max(...weapons.map(w => w.yearEnd));
  const timelineSpan = timelineEnd - timelineStart;

  useEffect(() => {
    if (selectedWeaponId && scrollRef.current) {
      const selectedCard = scrollRef.current.querySelector(`[data-weapon-id="${selectedWeaponId}"]`);
      if (selectedCard) {
        selectedCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [selectedWeaponId]);

  return (
    <div className="space-y-4">
      <ScrollArea className="w-full h-[600px] border rounded-lg bg-secondary/20 p-6">
        <div ref={scrollRef} className="relative min-w-[3000px]">
          {/* Timeline line */}
          <motion.div 
            className="absolute h-1 bg-primary/20 left-0 right-0 top-1/2 transform -translate-y-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Era markers */}
          <div className="absolute w-full flex justify-between text-xs text-muted-foreground -top-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {Math.abs(timelineStart)} {timelineStart < 0 ? "a.C." : "d.C."}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {Math.abs(timelineEnd)} {timelineEnd < 0 ? "a.C." : "d.C."}
            </motion.span>
          </div>

          {/* Weapons on timeline */}
          <AnimatePresence>
            {sortedWeapons.map((weapon, index) => {
              const position = ((weapon.yearStart - timelineStart) / timelineSpan) * 100;
              const isTop = index % 2 === 0;
              const verticalOffset = isTop ? -130 : 130;

              // Añadir espaciado horizontal adicional
              const horizontalOffset = index * 100; // 100px de espacio adicional entre tarjetas

              return (
                <motion.div
                  key={weapon.id}
                  initial={{ opacity: 0, y: isTop ? -200 : 200 }}
                  animate={{ opacity: 1, y: verticalOffset }}
                  exit={{ opacity: 0, y: isTop ? -200 : 200 }}
                  transition={{ 
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    duration: 0.5,
                    delay: index * 0.1 
                  }}
                  className="absolute"
                  style={{ 
                    left: `calc(${position}% + ${horizontalOffset}px)`, 
                    top: '50%', 
                    transform: 'translateX(-50%)',
                    width: '150px'
                  }}
                >
                  <Link href={`/arma/${weapon.id}`}>
                    <Card
                      data-weapon-id={weapon.id}
                      className={`p-2 cursor-pointer transition-all hover:scale-105 ${
                        selectedWeaponId === weapon.id ? 'ring-2 ring-primary bg-primary/5' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectWeapon(weapon.id);
                      }}
                    >
                      <div className="text-xs font-semibold mb-1 truncate">{weapon.name}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {weapon.yearStart < 0 ? Math.abs(weapon.yearStart) + " a.C." : weapon.yearStart + " d.C."}
                      </div>
                      <div className="text-[10px] text-muted-foreground line-clamp-1">
                        {weapon.period}
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Era divisions markers */}
          {[
            { year: -2000, label: "Edad Antigua" },
            { year: 476, label: "Edad Media" },
            { year: 1492, label: "Edad Moderna" }
          ].map((era, index) => {
            const position = ((era.year - timelineStart) / timelineSpan) * 100;
            return (
              <motion.div
                key={era.year}
                className="absolute h-16 w-px bg-primary/30"
                style={{
                  left: `${position}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 64, opacity: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              >
                <motion.span 
                  className="absolute top-full mt-2 text-xs text-muted-foreground whitespace-nowrap transform -translate-x-1/2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  {era.label}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </ScrollArea>

      <motion.p 
        className="text-sm text-muted-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        Desliza para explorar la línea del tiempo o haz clic en un arma para ver más detalles
      </motion.p>
    </div>
  );
}