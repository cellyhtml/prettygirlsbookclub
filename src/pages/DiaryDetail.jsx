import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Calendar, User, X } from 'lucide-react';
import '../styles/DiaryDetail.css';
import imgEncontroAbril1 from '../assets/diary/encontro_abril_1.jpg';
import imgEncontroAbril2 from '../assets/diary/encontro_abril_2.jpg';
import imgEncontroAbril3 from '../assets/diary/encontro_abril_3.jpg';
import imgEncontroAbril4 from '../assets/diary/encontro_abril_4.jpg';
import imgCalendarioMaio1 from '../assets/diary/calendario_maio_1.jpg';
import imgCalendarioMaio2 from '../assets/diary/calendario_maio_2.jpg';
import imgCalendarioMaio3 from '../assets/diary/calendario_maio_3.jpg';

const diaryPosts = {
  '1': {
    title: 'Primeiras impressões: Alasca',
    date: '02 Mai, 2026',
    author: 'Leandra',
    content: `O que estamos achando do coronel e do Gordo? Sem spoilers, mas já estamos sofrendo. Começar "Quem é você, Alasca?" é sempre uma jornada emocional intensa. John Green tem esse dom de nos fazer rir e, no parágrafo seguinte, nos deixar com o coração na mão. 

Estamos discutindo muito sobre o conceito do "Grande Talvez". O que vocês buscariam? A Alasca é uma personagem tão complexa e magnética, é impossível não se sentir atraída pela energia dela, mesmo sabendo que há tempestades vindo por aí.

Nossa primeira reunião de discussão foi cheia de teorias e sentimentos. Mal podemos esperar pelo encontro final do mês!`,
    images: ['/book-cover.jpg', '/group-photo.jpg']
  },
  '2': {
    title: 'Como organizar sua TBR',
    date: '25 Abr, 2026',
    author: 'Analu',
    content: `Dicas das CEOs para você parar de comprar livros e ler os que já tem (spoiler: nós também falhamos nisso). Organizar a "To Be Read" (TBR) é uma arte e, às vezes, um desafio de autocontrole. 

No clube, tentamos intercalar gêneros para não ficarmos saturadas. Se um mês é romance contemporâneo, no outro buscamos algo mais denso ou uma fantasia épica. Isso ajuda a manter o ritmo e a curiosidade sempre em alta.

Minha dica de ouro: use aplicativos de leitura para acompanhar seu progresso, mas não deixe que isso vire uma obrigação. Ler deve ser sempre um refúgio, não uma tarefa da lista de afazeres!`,
    images: ['https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1000']
  },
  '3': {
    title: 'Resumo: Encontro de Abril',
    date: '02 Mai, 2026',
    author: 'Pretty Girls',
    content: `Nosso encontro de abril foi simplesmente inesquecível! Nos reunimos no sábado, dia 2 de maio, em uma cafeteria super aconchegante para discutir cada detalhe de 'O Acordo', da Elle Kennedy. 

Passamos horas falando sobre o Garrett e a Hannah, rindo dos momentos engraçados e suspirando com o romance. A energia estava lá em cima!

Para fechar com chave de ouro, somamos os pontos do nosso quiz online e anunciamos a grande vencedora do mês. E quem levou a melhor foi a Polyane, que agora é oficialmente nossa universitária da Briar! 🎓🏒

Confiram as fotos desse dia cheio de café, risadas e surtos literários.`,
    images: [imgEncontroAbril1, imgEncontroAbril2, imgEncontroAbril3, imgEncontroAbril4]
  },
  '4': {
    title: 'Planejamento: O que vem por aí em Maio',
    date: '05 Mai, 2026',
    author: 'Pretty Girls',
    content: `Maio chegou com tudo e o livro escolhido para este mês é o clássico 'Quem é você, Alasca?' do John Green! Estamos animadíssimas para mergulhar na busca pelo 'Grande Talvez'. 

Para ninguém se perder, preparamos um calendário especial com todas as datas importantes: início da leitura, primeiras impressões, envio de sugestões para o próximo mês e, claro, o nosso aguardado encontro presencial com quiz!

Confiram o calendário completo e a legenda abaixo para se organizarem. Mal podemos esperar para ler e surtar com vocês! Que maio seja um mês de muitas páginas viradas e corações quentinhos.`,
    images: [imgCalendarioMaio1, imgCalendarioMaio2, imgCalendarioMaio3]
  },
  '5': {
    title: 'Resumo: Encontro de Maio',
    date: '30 Mai, 2026',
    author: 'Pretty Girls',
    content: `O nosso encontro de maio foi simplesmente sensacional! No sábado, dia 30 de maio, nos reunimos em nossa chamada online oficial para discutir cada capítulo, mistério e sentimento de "Quem é você, Alasca?", do John Green.

Passamos horas conversando sobre as dores e segredos de Culver Creek, compartilhando o que achamos das atitudes do Gordo, do Coronel e da magnética Alasca, e refletindo sobre o nosso próprio "Grande Talvez". Foi uma jornada intensa e emocionante para todas!

Como de costume, fechamos o encontro online com o nosso quiz oficial de leitura, repleto de risadas, surtos coletivos e diversão. E a nossa grande vencedora do mês, que provou saber absolutamente tudo sobre a história e levou a coroa de campeã do quiz de Alasca, foi a Kaylane! Parabéns, girl! 👑💖 Agradecemos demais pela energia única de todas as girls. Vocês tornam nossas discussões online momentos inesquecíveis! ✨

Confira o registro especial desse dia de conexão e muitas gargalhadas.`,
    images: ['/encontro-maio.jpg']
  },
  '6': {
    title: 'Planejamento: O que vem por aí em Junho',
    date: '01 Jun, 2026',
    author: 'Pretty Girls',
    content: `O mês mais apaixonante do ano chegou e o livro escolhido para embalar nossas discussões é o divertido, fofo e super leve "Clube do Livro dos Homens" de Lyssa Kay Adams! Estamos mega animadas para ler e dar muitas risadas com a história do Gavin e de seu clube secreto de atletas de beisebol letrados em romance.

Para que ninguém se perca e todas consigam acompanhar a leitura juntas, preparamos um cronograma de leitura e calendário exclusivo de Junho!

Salvem as imagens com a legenda do calendário para não perder nenhuma data importante. Mal podemos esperar para iniciar mais essa jornada literária fantástica com todas vocês! Que Junho seja um mês de muitas páginas viradas e corações quentinhos. 💖✨`,
    images: ['/calendario-junho-1.png', '/calendario-junho-2.png', '/calendario-junho-3.png']
  },
  '7': {
    title: 'Resumo: Encontro de Junho',
    date: '28 Jun, 2026',
    author: 'Pretty Girls',
    content: `O nosso encontro de junho foi simplesmente mágico e cheio de sabor! Desta vez, decidimos trocar as telas e as cafeterias por uma tarde ensolarada no parque, realizando o nosso primeiro Piquenique Junino oficial do Pretty Girls Book Club! 🌽🔥

Com direito a toalhas xadrez estendidas na grama, montamos um banquete junino de respeito: teve bolo de fubá quentinho, bolo de chocolate, pipoca, paçoquinha, doces típicos e, claro, muitas risadas. As girls capricharam nos quitutes e nos looks juninos!

A tarde foi recheada de diversão. Tivemos dinâmicas super legais para debatermos nossa leitura do mês, "Clube do Livro dos Homens", com cada uma compartilhando seus momentos favoritos (e as partes que nos fizeram surtar de rir). Para deixar tudo ainda mais animado, organizamos um Bingo literário especial! Foi uma disputa acirrada e cheia de torcida para ver quem completava a cartela primeiro.

Além de comermos muito e nos divertirmos com as brincabeiras, foi um momento único de conexão presencial, onde reforçamos o quanto nosso clube é um espaço de amizade e cumplicidade. Agradecemos a presença de todas as girls que tornaram esse arraiá literário tão inesquecível!

Confira abaixo alguns dos melhores cliques desse dia lindo e ensolarado.`,
    images: ['/encontro-junho-1.jpg', '/encontro-junho-2.jpg']
  }
};

const DiaryDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const post = diaryPosts[id];

  if (!post) {
    return (
      <div className="container diary-not-found">
        <h2 className="editorial-title">Página não encontrada</h2>
        <Link to="/" className="btn-editorial"><ArrowLeft size={20} /> Voltar para o Diário</Link>
      </div>
    );
  }

  return (
    <div className="diary-detail-page editorial-page">
      <div className="container">
        <Link to="/" className="back-link"><ArrowLeft size={18} /> Voltar para o Diário</Link>
        
        <header className="diary-header">
          <div className="diary-meta">
            <span className="handwriting scrap-date">{post.date}</span>
            <span className="diary-author"><User size={14} /> por {post.author}</span>
          </div>
          <h1 className="editorial-title">{post.title}</h1>
        </header>

        <div className="diary-layout">
          <div className="diary-content-block paper-note">
            <div className="pin"></div>
            <div className="diary-text">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="diary-sidebar">
            <div className="diary-moodboard">
              {post.images.map((img, index) => (
                <div 
                  key={index} 
                  className="polaroid" 
                  onClick={() => setSelectedImage(img)}
                  style={{ cursor: 'zoom-in' }}
                >
                  <div className="tape"></div>
                  <img src={img} alt={`Registro ${index + 1}`} className="polaroid-img" />
                </div>
              ))}
              
              <div className="handwriting diary-annotation">
                Registros desse capítulo...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Expanded" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryDetail;
