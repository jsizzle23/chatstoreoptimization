import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Twitter, Linkedin } from 'lucide-react';

interface AuthorBioProps {
  name: string;
  bio: string;
  image: string;
}

const AuthorBio = ({ name, bio, image }: AuthorBioProps) => {
  return (
    <Card className="mb-10">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="relative h-24 w-24 rounded-full overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">About {name}</h3>
            <p className="text-muted-foreground mb-4">{bio}</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorBio;