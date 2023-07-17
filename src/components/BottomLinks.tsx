import { usePageData } from "@/hooks/usePageData"
import { Typography } from "./core/Typography";
import AnimatedContainer from "./AnimatedContainer";

const BottomLinks = () => {
  const { bottomLinks } = usePageData();

  return (
    <div className="bottom-links">
      {bottomLinks.map(item => (
        <div
          key={item.id}
          className="link-item"
        >
          <AnimatedContainer delay={0.7}>
            <Typography variant="h3" text={item.title} />
          </AnimatedContainer>
          <AnimatedContainer element="ul" delay={0.8}>
            {item.links.map(itx => (
              <li key={itx}>
                <Typography variant="md" text={itx} />
              </li>
            ))}
          </AnimatedContainer>
        </div>
      ))}
    </div>
  );
}

export default BottomLinks;