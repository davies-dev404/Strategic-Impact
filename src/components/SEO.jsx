import { useEffect } from "react";

export function SEO({ title, description, keywords }) {
  useEffect(() => {
    // Update title
    const prevTitle = document.title;
    if (title) {
      document.title = `${title} | Luminary Communications`;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescription?.getAttribute("content");
    if (description && metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const prevKeywords = metaKeywords?.getAttribute("content");
    if (keywords && metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Cleanup function to restore previous values if needed (optional)
    return () => {
      // document.title = prevTitle;
      // if (prevDescription) metaDescription?.setAttribute("content", prevDescription);
      // if (prevKeywords) metaKeywords?.setAttribute("content", prevKeywords);
    };
  }, [title, description, keywords]);

  return null;
}
