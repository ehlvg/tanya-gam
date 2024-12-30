import "./App.css";
import {
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  DataList,
  Flex,
  Grid,
  Heading,
  Inset,
  Link,
  ScrollArea,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import avatar from "./assets/avatar.png";
import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  CopyIcon,
  Link2Icon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import priceData from "../src/price.json";
import faqData from "../src/faq.json";
import * as Accordion from "@radix-ui/react-accordion";

function App() {
  const [brief, setText] = useState("");

  useEffect(() => {
    fetch("/brief.txt")
      .then((response) => response.text())
      .then((data) => setText(data));
  }, []);
  return (
    <>
      <Box maxWidth="700px" mx="auto" width="fit-content">
        <Card
          id="card"
          variant="classic"
          size={{ initial: "3", sm: "3", md: "4", xl: "5" }}
        >
          <Flex wrap="wrap" gap="6" align="center" justify="center">
            <Avatar src={avatar} fallback="TG" size="7" id="avatar" />
            <Flex
              gap="2"
              direction="column"
              align={{ initial: "center", xs: "start" }}
            >
              <Heading size={{ initial: "4", xs: "5" }} color="bronze">
                Татьяна Гамуйло
              </Heading>
              <Text size="4" align={{ initial: "center", xs: "left" }}>
                Психолог, член ОППЛ и АОРПП
              </Text>
            </Flex>
          </Flex>

          <Section size="1">
            <Grid columns={{ initial: "1", xs: "2" }} width="auto" gap="2">
              <Callout.Root>
                <Callout.Icon>
                  <PaperPlaneIcon />
                </Callout.Icon>
                <Callout.Text>
                  <Flex direction="column" gap="2" wrap="wrap">
                    <Heading size="4">Кратко</Heading>
                    <Text size="3">{brief}</Text>
                  </Flex>
                </Callout.Text>
              </Callout.Root>
              <Card>
                <Flex justify="center" align="center" wrap="wrap" height="100%">
                  <DataList.Root
                    orientation={{ initial: "vertical", sm: "horizontal" }}
                  >
                    <DataList.Item align="center">
                      <DataList.Label minWidth="88px">
                        Работаю по
                      </DataList.Label>
                      <DataList.Value>
                        <Badge color="bronze" variant="soft">
                          Предварительной записи
                        </Badge>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align="center">
                      <DataList.Label minWidth="88px">
                        Дни работы
                      </DataList.Label>
                      <DataList.Value>
                        <Badge color="blue" variant="soft">
                          Понедельник - Суббота
                        </Badge>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align="center">
                      <DataList.Label minWidth="88px">
                        Время работы
                      </DataList.Label>
                      <DataList.Value>10:00 - 20:00</DataList.Value>
                    </DataList.Item>
                  </DataList.Root>
                  <Flex wrap="wrap" gap="2">
                    <Separator
                      size="4"
                      mt={{ initial: "2", sm: "auto" }}
                      my="2"
                    />
                    <Link
                      href="https://dikidi.net/1086402?p=0.pi"
                      target="_blank"
                    >
                      <Button variant="classic">
                        <Link2Icon />
                        Записаться онлайн
                      </Button>
                    </Link>
                    <Link href="#faq">
                      <Button variant="soft">
                        <CopyIcon />
                        Контракт
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Card>
            </Grid>
          </Section>

          <Section size="1">
            <Card>
              <ScrollArea style={{ height: "300px" }}>
                <Flex gap="3" direction="column">
                  <Heading>Обо мне</Heading>
                  <Blockquote>
                    «Ответы, которые Вы ищете, они уже внутри Вас». <br /> Надо
                    их просто научиться замечать.
                  </Blockquote>
                  <Text>
                    Меня зовут, Татьяна, я психолог. Являюсь членом Российской
                    Лиги Психологов и психотерапевтов, и Ассоциации психологов
                    ориентированных на решение.
                  </Text>
                  <Text>
                    Я умею задавать вопросы, и помогу научиться находить на них
                    ответы.
                  </Text>
                  <Text>
                    Убеждена в том, что даже крошечный, но ежедневный шаг
                    приближает нас к цели ближе, чем крутой огромный шаг
                    сделанный когда-нибудь. Приглашаю вас на консультации и в
                    терапию. Моя работа — это не только разговоры о ваших
                    тревогах, волнениях, поисках, неудачах и потрясениях, но и
                    решения. Решения, которые мы будем искать вместе.
                  </Text>
                  <Text>
                    Будем искать разными путями, используя все научно-доказанные
                    и эффективные методики и техники. Верю, что изменения
                    возможны на любом этапе пути и в любой ситуации. По ходу
                    консультирования я рассказываю, что происходит и почему.
                  </Text>
                  <Text>
                    Считаю это важным этапом, потому что понимание себя, своих
                    поступков и их последствий помогает в терапии и сильно
                    улучшает качество жизни в последствии. Даю полезную
                    литературу, в виде электронных книг, техник и упражнений.
                  </Text>
                </Flex>
              </ScrollArea>
            </Card>
          </Section>

          <Section size="1">
            <Callout.Root>
              <Heading size="3">
                Вы можете ко мне обратиться, если вам знакомы такие ощущения
              </Heading>
              <ul>
                <Grid
                  gap="3"
                  columns="repeat(auto-fill, minmax(200px, 1fr))"
                  className="problems-list"
                >
                  <li>Регулярно накатывает тревожность</li>

                  <li>Часто критикуете и недовольны собой</li>

                  <li>Устаете быстро и сильно</li>

                  <li>Не уверены, что хотите работать на этой работе</li>

                  <li>Сложно строить отношения</li>

                  <li>Проблемы с принятием решений</li>

                  <li>Чувствуете себя потерянным и одиноким</li>

                  <li>Страдаете от депрессивных симптомов</li>

                  <li>Ищете пути решения сложных ситуаций</li>

                  <li>Хотите разобраться в себе и своих потребностях</li>
                </Grid>
              </ul>
            </Callout.Root>
          </Section>

          <Section size="1">
            <Flex direction="column" gap="3">
              <Heading size="4">Формат работы</Heading>
              <Grid columns={{ initial: "1", sm: "2" }} gap="3">
                <Card variant="classic">
                  <Heading size="2" my="2" color="bronze">
                    Онлайн и очное консультирование
                  </Heading>
                  <Text>
                    В формате 75 и 50 минут по предварительной договорённости
                  </Text>
                </Card>
                <Card variant="classic">
                  <Heading size="2" my="2" color="bronze">
                    Долгосрочная терапия
                  </Heading>
                  <Text>
                    Выстраивание совершенно иного уровня жизни, выявление и
                    смена негативного сценария. Временной формат по
                    договорённости
                  </Text>
                </Card>
              </Grid>
            </Flex>
          </Section>

          <Section size="1">
            <Flex direction="column" gap="3">
              <Heading size="4">Прайс-лист</Heading>
              <Grid columns={{ initial: "1", sm: "2" }} gap="3">
                {priceData.map((item, index) => (
                  <Card key={index} variant="classic">
                    <Heading size="2" my="2" color="bronze">
                      {item.type}
                    </Heading>
                    <Text>{item.price}</Text>
                  </Card>
                ))}
              </Grid>
            </Flex>
          </Section>

          <Section>
            <Grid columns={{ initial: "1", sm: "2" }} gap="3">
              <Flex direction="column" gap="3">
                <Heading>У меня свой подход к работе</Heading>
                <Text>
                  Я — психолог, который использует подходы, нацеленные на
                  изменения:
                </Text>
                <Heading size="2">
                  ОРКТ — краткосрочная терапия ориентированная на решение.
                </Heading>
                <Text>
                  Именно этот метод позволяет решить любую задачу достаточно
                  быстро, но подходит и для длительной работы.
                </Text>
                <Heading size="2">
                  КПТ — когнитивно-поведенческая терапия
                </Heading>
                <Text>
                  Ее идея в том, что ваши мысли управляют вашими действиями и
                  эмоциями. А значит, если научиться мыслить по-другому, то
                  можно и начать жить по-другому.
                </Text>
                <Heading size="2">Моя цель —</Heading>
                <Text>
                  исследовать Ваш запрос вместе с Вами и найти то, что сделает
                  вашу жизнь проще, понятнее и радостнее уже сейчас или в
                  ближайшее время.
                </Text>
              </Flex>
              <img
                src="/src/assets/side.jpeg"
                alt="Picture of the Tatyana Gamuylo - psychologist"
                className="side-image"
              />
            </Grid>
          </Section>

          <Section size="1">
            <Heading size="3" my="3" id="faq">
              Как мы будем работать
            </Heading>
            <Flex direction="column" gap="3">
              <Accordion.Root type="single" className="AccordionRoot">
                {faqData.map((item, index) => (
                  <Accordion.Item
                    className="AccordionItem"
                    value={index.toString()}
                  >
                    <Accordion.Header className="AccordionHeader">
                      <Accordion.Trigger className="AccordionTrigger">
                        <Text>{item.title}</Text>
                        <ChevronDownIcon
                          className="AccordionChevron"
                          aria-hidden
                        />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                      <div className="AccordionContentText">{item.content}</div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Flex>
          </Section>

          <Inset mt="6">
            <Separator size="4" />
            <Flex justify="between" align="center" p="4">
              <Text size="2" color="bronze">
                © 2025 самозанятая Гамуйло Т. П.
              </Text>
              <DataList.Root>
                <DataList.Item align="center">
                  <DataList.Label minWidth="88px">Телефон</DataList.Label>
                  <DataList.Value>
                    <Link href="tel:89319878177">8 (931)-987-81-77</Link>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item align="center">
                  <DataList.Label minWidth="88px">Email</DataList.Label>
                  <DataList.Value>
                    <Link href="mailto:tanya_gam@mail.ru">
                      tanya_gam@mail.ru
                    </Link>
                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>
            </Flex>
          </Inset>
        </Card>
      </Box>
    </>
  );
}

export default App;
