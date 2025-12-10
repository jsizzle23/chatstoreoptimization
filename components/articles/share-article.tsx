"use client";

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Facebook, Link } from 'lucide-react';
import { toast } from 'sonner';

interface ShareArticleProps {
  title: string;
}

const ShareArticle = ({ title }: ShareArticleProps) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  const getShareUrl = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    
    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      default:
        return '#';
    }
  };

  return (
    <div className="my-10">
      <Separator className="mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-lg font-medium">Share this article</h3>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => window.open(getShareUrl('twitter'), '_blank')}
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => window.open(getShareUrl('linkedin'), '_blank')}
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => window.open(getShareUrl('facebook'), '_blank')}
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleCopyLink}
            aria-label="Copy link"
          >
            <Link className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareArticle;