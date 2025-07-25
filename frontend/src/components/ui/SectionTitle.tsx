interface SectionTitleProps {
    title: string;
    more?: boolean;
    link?: string;
}

export const SectionTitle = ({ title, more, link }: SectionTitleProps) => {
  return (
    <div className="flex justify-between items-center mb-6 border-b border-neutral-700 pb-2">
      <h2 className="text-neutral-400 tracking-widest uppercase text-sm">{title}</h2>
        {more && 
          <button className="text-neutral-500 text-sm hover:text-primary uppercase transition" onClick={() => console.log('go to: ' + (link || '#'))}>
            More
          </button>
        }
    </div>
  );
}
