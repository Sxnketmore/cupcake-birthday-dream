import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

// Placeholder photos - user can replace these
const photos = [
  {
    id: 1,
    src: "/images/her1.jpg",
    message: "You're my forever.",
  },
  {
    id: 2,
    src: "/images/her2.jpg",
    message: "Every smile of yours is my favorite sight.",
  },
  {
    id: 3,
    src: "/images/her3.jpg",
    message: "You make ordinary moments magical.",
  },
  {
    id: 4,
    src: "/images/her4.jpg",
    message: "My heart beats for you, always.",
  },
  {
    id: 5,
    src: "/images/her5.jpg",
    message: "You are my sunshine on cloudy days.",
  },
  {
    id: 6,
    src: "/images/her6.jpg",
    message: "With you, I found my home.",
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl md:text-6xl font-cursive text-gradient">
            Our Beautiful Moments 📸
          </h2>
          <p className="text-xl text-muted-foreground">
            Click on any photo to see a special message
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className="group cursor-pointer overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 glass-card"
              onClick={() => setSelectedPhoto(photo)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={`Memory ${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-3xl bg-transparent border-none shadow-none">
            {selectedPhoto && (
              <div className="polaroid mx-auto max-w-md">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={selectedPhoto.src}
                    alt="Selected memory"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <p className="text-center text-lg font-cursive text-gray-800 mt-4 italic">
                  {selectedPhoto.message}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;
